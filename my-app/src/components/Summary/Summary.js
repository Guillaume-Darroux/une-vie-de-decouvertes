import React from 'react';
import photo from '../../assets/images/profil.jpg';
import { Button } from 'semantic-ui-react'

import './styles.scss';

function Summary() {
    
    return (
        <div className='summary'>
            <img src={photo} alt="Photo de Celine C." className="summary-picture"/>
            <div className="summary-resume">
                <p className="summary-resume-text">Naturopathe-Coach, je suis basée en Haute Savoie. Je partage ici mon amour de la médecine holistique</p>
                <Button className="summary-resume-button" href="/about" secondary>Lire plus</Button>
            </div>
        </div>
    )
}

export default React.memo(Summary);