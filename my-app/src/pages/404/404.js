/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';

import './styles.scss';

function Page404() {
    
    return (
        <Segment>
            <div className="page404">
                <Header as="h1">Cette page n'existe pas.</Header>
                <Link to="/">Retourner à l'accueil</Link>
            </div>
        </Segment>

    )
}

export default React.memo(Page404);