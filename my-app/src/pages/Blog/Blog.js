import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import { Link } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';

import './style.scss';

function Blog() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(null);

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
                return new Date(b.attributes.date) - new Date(a.attributes.date);
              });

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

    function handleClick(event) {
        const category = event.target.innerHTML;
        
        const filteredPosts = posts.filter((post) => {
            return post.attributes.category.trim() === category.trim();
        });
        
        setFilteredPosts(filteredPosts);
    }

    return (
        <>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
                <h2 className='title-others-section'>BLOG</h2>
            </div>
            <div className="main-container">
                <div className="blog-navbar">
                    <div>
                        Catégories: {isLoading
                                        ?
                                            null
                                        :
                                            categories.map((category) => (
                                                <span onClick={handleClick}> {category} </span>
                                            ))
                                        }
                    </div>
                </div>
                <Grid className="posts-container" centered container stackable>
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