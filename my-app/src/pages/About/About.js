import React from 'react';
import photo from '../../assets/images/profil.jpg';

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
                    Naturopathe-Coach, je suis basée en Haute Savoie. Je partage ici mon amour de la médecine holistique Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores delectus deleniti iure dolores sint deserunt voluptatem, commodi, saepe veniam quisquam ipsam nemo illum et quibusdam velit suscipit fuga voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vel sint itaque eius molestiae rem enim officia tempora voluptatum, provident recusandae ducimus porro distinctio sit commodi architecto praesentium voluptatibus incidunt.
                </div>
            </div>
        </>
    )
}

export default React.memo(About);