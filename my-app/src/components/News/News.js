import React from 'react';
import photo1 from '../../images/pexels-jane-doan-1132047.jpg';
import photo2 from '../../images/pexels-matteo-milan-11220223.jpg';
import photo3 from '../../images/pexels-polina-tankilevitch-8539083.jpg';

import './styles.scss';

function News() {
    
    return (
        <div className='news'>
            <h2 className='news-title'>ACTUALITES</h2>
            <div className='news-content'>
                <div className='article'>
                    <img className="article-image" src={photo1} alt="Photo d'article" />
                    <div className="article-text"> Lorem ipsum dolor sit amet consectetur...
                    </div>
                </div>
                <div className='article'>
                <img className="article-image" src={photo2} alt="Photo d'article" />
                    <div className="article-text">Lorem ipsum dolor quo hic sit ...</div>
                </div>
                <div className='article'>
                <img className="article-image" src={photo3} alt="Photo d'article" />
                    <div className="article-text">Lorem ipsum dolor sit ea alias...</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(News);