import React from 'react';

import './styles.scss';

function News() {
    
    return (
        <div className='summary'>
            <img src={photo} alt="Photo de paysage enneigé" className="summary-picture"/>
            <div className="summary-resume">
                <p className="summary-resume-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, harum repudiandae optio ea accusantium quasi soluta quia odio exercitationem vel facere aliquam, similique laboriosam vitae?</p>
            </div>
        </div>
    )
}

export default React.memo(News);