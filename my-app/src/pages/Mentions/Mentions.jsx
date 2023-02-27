import React from 'react';
import { Container } from 'semantic-ui-react';

import './style.scss';

function Mentions() {

    return (
        <>
            <div className="title-others">
                <h1 className="title-others-text">Une vie de découvertes</h1>
            </div>

            <div className='mentions'>
                    <Container className="mentions-content" text>
                    <h2 className="mentions-content-h2">Mentions légales</h2>
                    <p className="first-paragraph">
                    Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site www.celestine-naturopathe.fr les informations suivantes :
                    </p>
                    <p>
                    <span className="mentions-content-span-bold"> 1. Propriétaire du Site / Responsable de la publication</span><br/>
                    Nom : Céline Collet<br/>
                    Adresse : 587 rue du Faucigny<br/>
                    Code postal : 74800<br/>
                    Ville : Saint Pierre en Faucigny<br/>
                    Email : celestnaturo@gmail.com<br/>
                    Tél. : +33 6.24.99.02.55
                    </p>
                    <p>
                    <span className="mentions-content-span-bold">2. Activité</span><br/>
                    Naturopathe - Ostéo réfléxologue - Bioénergéticienne<br/>
                    Numéro de SIRET : 851 101 410<br/>
                    Code APE : (à venir)
                    </p>
                    <p>
                    <span className="mentions-content-span-bold">3. Site internet</span><br/>
                    Le site internet est hébergé sur le domaine : 
                    </p>
                    <p>
                    <span className="mentions-content-span-bold">4. Hébergeur du site</span><br/>
                    Entreprise : <br/>
                    Site :  <br/>
                    Adresse : <br/>
                    Pays : <br/>
                    Téléphone :<br/>
                    </p>
                    <p className="last-paragraph">
                    <span className="mentions-content-span-bold">À propos des mentions légales :</span><br/>
                    Les mentions légales définies sur cette page s'appliquent à l'ensemble du présent site internet et sont susceptibles d'évoluer sans préavis. L'Utilisateur du site est donc invité à les consulter régulièrement afin d'en prendre connaissance.
                    </p>
                    </Container>
                </div>
        </>
    )
}

export default React.memo(Mentions);