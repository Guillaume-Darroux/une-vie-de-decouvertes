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
        
        fetch(`${API_URL}/posts/${id}/?populate=*`)
            .then(res => res.json())
            .then(res => {
                const tempPost = res.data;
                // On rajoute un createdAt au format "DD/MM/YYYY" grâce à la librairie "moment"
                const format = "DD/MM/YYYY";
                const formatedDatePost = {...tempPost, createdAt: moment(tempPost.attributes.createdAt).format(format)};
                console.log("formatedDatePost", formatedDatePost);
                setPost(formatedDatePost);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className='post'>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
                <h2 className='title-others-section'>{post.attributes?.title}</h2>
            </div>
            <Grid className="post-container" container>
                <div className="post-date">Ecrit le : {post.createdAt}</div>
                <div className="post-image">
                    {isLoading ?
                        "Loading..."
                        :
                        <Image src={
                            post.attributes.image?.data.attributes.formats.medium?.url !== undefined ?
                            "http://localhost:1337" +post.attributes.image?.data.attributes.formats.medium?.url
                            :
                            null
                            }
                        />
                    }
                </div>
                <p className="post-content">{post.attributes?.content}</p>
            </Grid>
        </div>
    )
}
export default React.memo(Post);
