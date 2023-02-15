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
            // On trie les posts par date de création
            const sortedPosts = res.data.sort((a, b) => {
                return new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt);
                //TODO: Tri par date de publication, voir pour changer et le faire par date
              });
console.log(sortedPosts)
            // On formate la date de création
            const formatedPosts = sortedPosts.map((post) => {
                post.attributes.date = new Date(post.attributes.date).toLocaleDateString('fr-FR');
                return post;
            }); 
            
            // On récupère la liste des catégories
            const categories = formatedPosts.map((post) => {
                return post.attributes.category;
            });
            
            setPosts(formatedPosts);
            setFilteredPosts(formatedPosts);
            setCategories(categories);
            setIsLoading(false);
        });
        
    }, []);

    // Gestion de la sélection d'une catégorie
    function handleClick(event) {
        //TODO: Indicatif visuel que la catégorie est sélectionnée
        const category = event.target.innerHTML;
        
        const filteredPosts = posts.filter((post) => {
            return post.attributes.category.trim() === category.trim();
        });
        
        setFilteredPosts(filteredPosts);
    }

    // Réinitialisation de la recherche
    function handleClickReset(event) {
        //TODO: Réinitialiser l'indicateur visuel de la catégorie sélectionnée
        setFilteredPosts(posts);
    }

    // Gestion de la recherche
    function handleChange(event) {
        const searchedTerm = event.target.value;
        setSearchTerm(searchedTerm);
        console.log(searchedTerm);
        if(searchedTerm === "") {
            setFilteredPosts(posts);
        } else {
            const searchedPosts = posts?.filter((post) => {
                const lowerCaseSearchTerm = searchedTerm.toLowerCase();
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
                <h2 className='title-others-section'>BLOG</h2>
            </div>
            <div className="main-container">
                <div className="blog-navbar">
                    <div className="blog-navbar-categories">
                        Catégories: <span cursor="grab" onClick={handleClickReset}> TOUT </span> {isLoading
                                        ?
                                            null
                                        :
                                            categories.map((category) => (
                                                <span onClick={handleClick}> {category} </span>
                                            ))
                                        }
                    </div>
                    <div className="blog-navbar-search">
                        <SearchInput value={searchTerm} onChange={handleChange} />     
                    </div>
                </div>
                <Grid className="posts-container" centered container stackable >
                {isLoading ?
                        "Loading..."
                    :
                        filteredPosts.map((post) => (
                            <Link to={`/posts/${post.id}`}>
                                <Card key={post.id} className="posts-container-post">
                                    <Image className="article-image" src={
                                        post.attributes.image.data.attributes.formats.small !== undefined ?
                                            API_URL + post.attributes.image.data.attributes.formats.small.url
                                        :
                                            "..."
                                    } />
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