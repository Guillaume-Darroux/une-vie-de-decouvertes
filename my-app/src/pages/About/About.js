import React from 'react';
import photo from '../../assets/images/profil.jpg';
import { Button } from 'semantic-ui-react'

import './styles.scss';

function About() {
    
    return (
        <>
            <div className="title-about">
                <h1 className="title-about-text">Une vie de découvertes</h1>
                <h2 className='title-about-section'>A PROPOS</h2>
            </div>

            <div className='about'>
                <img src={photo} alt="Photo de Celine C." className="about-picture"/>
                <div className="about-resume">
                    <p className="about-resume-text">Naturopathe-Coach, je suis basée en Haute Savoie. Je partage ici mon amour de la médecine holistique</p>
                    <Button className="about-resume-button" secondary>Lire plus</Button>
                </div>
            </div>
        </>
    )
}

export default React.memo(About);