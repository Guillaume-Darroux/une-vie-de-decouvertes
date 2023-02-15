import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { API_URL } from '../../utils/config';
import { Grid, Image } from 'semantic-ui-react'

import "./style.scss";

function Post () {

    const { id } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        console.log(id);
        
        fetch(`${API_URL}/api/posts/${id}/?populate=*`)
            .then(res => res.json())
            .then(res => {
                const formatedPost = res.data;

                // On formate la date de création
                formatedPost.attributes.date = new Date(formatedPost.attributes.date).toLocaleDateString('fr-FR');
                setPost(formatedPost);
                setIsLoading(false);
            });
        }, []);
        
        console.log(post);
    return (
        <div className='post'>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
                <h2 className='title-others-section'>{post.attributes?.title}</h2>
            </div>
            {isLoading
                ?
                    null
                :
                    <Grid className="post-container" container>
                        <div className="post-date"><span>{post.attributes.category} </span>Ecrit le : {post.attributes.date}</div>
                        <div className="post-image">
                            <Image src={
                                post.attributes.image?.data.attributes.formats.medium?.url !== undefined ?
                                `${API_URL + post.attributes.image?.data.attributes.formats.medium?.url}`
                                :
                                null
                                }
                            />
                        </div>
                        <p className="post-content">{post.attributes?.content}</p>
                    </Grid>
            }
        </div>
    )
}
export default React.memo(Post);
