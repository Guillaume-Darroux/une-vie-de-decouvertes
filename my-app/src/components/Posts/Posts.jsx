import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import moment from 'moment';
import { API_URL } from '../../utils/config';

//import photo1 from '../../assets/images/pexels-jane-doan-1132047.jpg';
//import photo2 from '../../assets/images/pexels-matteo-milan-11220223.jpg';
//import photo3 from '../../assets/images/pexels-polina-tankilevitch-8539083.jpg';

import "./style.scss";
import { Link } from 'react-router-dom';

function Posts () {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        
        fetch(`${API_URL}/posts/?populate=*`, 
        {
            method: "GET",
            headers: {
                "Accept": "Application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            // On rajoute un createdAt au format "DD/MM/YYYY" grâce à la librairie "moment"
            const format = "DD/MM/YYYY";
            const formatedDatePosts = res.data.map((post) => {
              return {
                ...post,
                createdAt: moment(post.attributes.createdAt).format(format)
              }
            });
            
            // On inverse l'ordre du tableau pour afficher les news les plus récentes en premier
            const reversedDatePosts = formatedDatePosts.reverse();
            
            // On ne garde que les 3 premiers posts (à faire via l'API par la suite)
            const threePosts = reversedDatePosts.slice(0,3);
            setPosts(threePosts);
            setIsLoading(false);

        })

    }, []);
console.log("posts", posts)
    return (
        <>
            <Card.Group>
                {isLoading ?
                    "Loading..."
                :
                    posts.map((post, index) => (
                        <Link to={`/posts/${post.id}`}>
                            <Card key={post.id}>
                                <Image className="article-image" src={
                                    post.attributes.image.data.attributes.formats.small !== undefined ?
                                        "http://localhost:1337" +post.attributes.image.data.attributes.formats.small.url
                                    :
                                        "..."
                                } />
                                <Card.Content>
                                    <Card.Header>{post.attributes.title}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{post.createdAt}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                    {post.attributes.content.substring(0,150)} ...
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    ))
                    }

                    {/* <Card>
                        <Image className="article-image" src={photo2} />
                        <Card.Content>
                            <Card.Header>Douche écossaise ?</Card.Header>
                            <Card.Meta>
                                <span className='date'>12/12/2022</span>
                            </Card.Meta>
                            <Card.Description>
                                On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image className="article-image" src={photo3} />
                            <Card.Content>
                                <Card.Header>Bienfaits du sport</Card.Header>
                            <Card.Meta>
                                <span className='date'>11/12/2022</span>
                            </Card.Meta>
                            <Card.Description>
                                Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d entre elles a été altérée par l addition d humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.
                            </Card.Description>
                        </Card.Content>
                    </Card> */}
            </Card.Group>
        </>
    )
}
export default Posts;