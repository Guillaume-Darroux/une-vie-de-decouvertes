import React from 'react';
import photo from '../../images/photo-neige.jpg';
import ButtonReadMore from '../ButtonReadMore/ButtonReadMore';

import './styles.scss';

function Summary() {
    
    return (
        <div className='summary'>
            <img src={photo} alt="Photo de paysage enneigé" className="summary-picture"/>
            <div className="summary-resume">
                <p className="summary-resume-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, harum repudiandae optio ea accusantium quasi soluta quia odio exercitationem vel facere aliquam, similique laboriosam vitae?</p>
                <ButtonReadMore />
            </div>
        </div>
    )
}

export default React.memo(Summary);