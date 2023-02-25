import React from 'react';

import './style.scss';

function Specialities() {
    
    const stress = "burn-in, burn-out, bore-out, déprime, dépression, etc.";
    const digestive = "constipation, diarrhée, ballonnements, gaz, reflux, SIBO, SII, maladie de Crohn, etc.";
    const osteo = "Qu'est-ce-que l'osteoreflexologie ?";
    const bioEnergetic = "Explications sur la bioenergétique.";

    return (
        <>
            <h2 className="specialities">MES SPECIALITES</h2>
            <p className="specialities-names">
                <div className="stress" data-tooltip={stress}>Stress - anxiété</div>
                <div className="digestive" data-tooltip={digestive}>Troubles digestifs</div>
                <div className="osteoreflexology" data-tooltip={osteo}>Ostéoréflexologie</div>
                <div className="bioenergetic" data-tooltip={bioEnergetic}>Bioénergétique</div>
            </p>
        </>
    )
}

export default React.memo(Specialities);