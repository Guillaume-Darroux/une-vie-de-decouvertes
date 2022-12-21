import React from 'react';

import './styles.scss';

function News() {
    
    return (
        <div className='news'>
            <h2 className='news-title'>Actualités</h2>
            <div className='news-content'>
                
            </div>
        </div>
    )
}

export default React.memo(News);