import React from 'react';
import photo from '../../assets/images/profil.jpg';
import { Button } from 'semantic-ui-react'

import './styles.scss';
import { NavLink } from 'react-router-dom';

function Summary() {
    
    return (
        <div className='summary'>
            <img src={photo} alt="Celine C." className="summary-picture"/>
            <div className="summary-resume">
                <p className="summary-resume-text">Je me présente, je m'appelle Céline.<br/> Naturopathe - Coach - Ostéo réflexologue - Bioénergéticienne. <br/> Je vous partage ici mon amour de la médecine holistique.</p>
                <Button as={NavLink} to="/about" className="summary-resume-button" secondary>Lire plus</Button>
            </div>
        </div>
    )
}

export default React.memo(Summary);