import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import { Card, Image } from 'semantic-ui-react';

import "./style.scss";
import { Link } from 'react-router-dom';

function Posts () {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);

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
                
            // On ne garde que les 3 premiers posts (à faire via l'API par la suite ?)
            const threePosts = formatedPosts.slice(0,3);
            setPosts(threePosts);
            setIsLoading(false);
        });

    }, []);
    console.log("posts", posts);
    return (
        <>
            <Card.Group className="card-group-container">
                {isLoading ?
                    "Loading..."
                :
                    posts.map((post) => (
                        <Link to={`/posts/${post.id}`}>
                            <Card key={post.id} className="card-post">
                                <Image className="post-article-image" src={
                                    post.attributes.image.data.attributes.formats.small !== undefined ?
                                        API_URL + post.attributes.image.data.attributes.formats.small.url
                                    :
                                        "..."
                                } wrapped/>
                                <Card.Content className="post-card-content">
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
            </Card.Group>
        </>
    )
}

export default React.memo(Posts);