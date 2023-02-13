import React from 'react';
import Posts from '../Posts/Posts';

import './styles.scss';


function News() {
    
    return (
        <div className='news'>
            <h2 className='news-title'>ACTUALITES</h2>
            <div className='news-content'>
                <Posts />
            </div>
        </div>
    )
}

export default React.memo(News);