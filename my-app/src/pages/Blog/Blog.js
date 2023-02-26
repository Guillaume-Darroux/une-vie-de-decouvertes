import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';

import './style.scss';
import SearchInput from '../../components/SearchInput/SearchInput';

function Blog() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("tout");

    useEffect(() => {
        
        fetch(`${API_URL}/api/posts/?populate=*`, 
        {
            method: "GET",
            headers: {
                "Accept": "Application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            // On trie les posts par date de publication
            const sortedPosts = res.data.sort((a, b) => {
                return new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt);
              });

            // On formate la date de publication
            const formatedPosts = sortedPosts.map((post) => {
                post.attributes.date = new Date(post.attributes.publishedAt).toLocaleDateString('fr-FR');
                return post;
            }); 
            
            // On récupère la liste des catégories
            const allCategories = formatedPosts.map((post) => {
                return post.attributes.category;
            });
            
            // On supprime les doublons
            const categories = [...new Set(allCategories)];

            setPosts(formatedPosts);
            setFilteredPosts(formatedPosts);
            setCategories(categories);
            setIsLoading(false);
        });
        
    }, []);

    // Gestion du clic sur une catégorie
    function handleCategoryClick(category) {
        // Si on a cliqué sur "tout", on affiche tous les posts
        if(category === "tout") {
            setFilteredPosts(posts);
        } else {
            // Sinon, on filtre les posts de la catégorie sélectionnée
            const filteredPosts = posts.filter((post) => {
                return post.attributes.category.trim() === category.trim();
            });
            
            setFilteredPosts(filteredPosts);
        }
        setActiveCategory(category);
    }

    // Fonction qui applique la classe "active" si la catégorie est sélectionnée
    function isActive(category) {
        return category === activeCategory ? "active" : "";
    };

    // Gestion de la recherche
    function handleChange(event) {
        const searchedTerm = event.target.value;
        setSearchTerm(searchedTerm);
        // Si le champ de recherche est vide, on affiche tous les posts
        if(searchedTerm === "") {
            setFilteredPosts(posts);
        } else {
            const searchedPosts = posts?.filter((post) => {
                const lowerCaseSearchTerm = searchedTerm.toLowerCase(); // searchedTerm pour éviter le délai du setSearchTerm
                const lowerCasePostTitle = post.attributes.title.toLowerCase();
                const lowerCasePostContent = post.attributes.content.toLowerCase();
                return (
                    lowerCasePostTitle.includes(lowerCaseSearchTerm)
                    ||
                    lowerCasePostContent.includes(lowerCaseSearchTerm)
                    );
            });

            setFilteredPosts(searchedPosts);
        }
    }

    return (
        <>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
                {/* <h2 className='title-others-section'>BLOG</h2> */}
            </div>
            <div className="main-container">
                <div className="blog-navbar">
                    <div className="blog-navbar-categories">
                        <span
                            className={`posts-categories ${isActive("tout")}`}
                            cursor="grab"
                            onClick={() => handleCategoryClick("tout")}
                        > tout
                        </span>
                        {/* Affichage de catégories */}
                        {isLoading
                            ?
                                null
                            :
                                categories.map((category) => (
                                    <span className={`posts-categories ${isActive(category)}`} onClick={() =>handleCategoryClick(category)}> {category} </span>
                                ))
                            }
                    </div>
                    <div className="blog-navbar-search">
                        <SearchInput value={searchTerm} onChange={handleChange} />     
                    </div>
                </div>

                <Grid className="posts-container" centered container stackable>
                {isLoading ?
                        "Loading..."
                    :
                        filteredPosts.map((post) => (
                            <Link to={`/posts/${post.id}`} className="blog-post-link">
                                <Card key={post.id} className="posts-container-post">
                                    <Image className="blog-article-image" src={
                                        post.attributes.image.data.attributes.formats.small !== undefined ?
                                            API_URL + post.attributes.image.data.attributes.formats.small.url
                                        :
                                            "..."
                                    } wrapped/>
                                    <Card.Content>
                                        <Card.Header>{post.attributes.title}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{post.attributes.date}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                        {post.attributes.content.substring(0,150)} ...
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Link>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}

export default React.memo(Blog);