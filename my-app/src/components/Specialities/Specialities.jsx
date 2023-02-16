import React from 'react';

import './style.scss';

function Specialities() {
    
    const osteo = "Qu'est-ce-que l'osteoreflexologie ?";
    const digestive = "Qu'est-ce-que l'on entend par troubles digestifs ?";
    const skin = "Explications sur les problèmes de peau.";
    const allergy = "Explications sur les allergies.";
    const bioEnergetic = "Explications sur la bioenergétique.";

    return (
        <>
            <h2 className="specialities">MES SPECIALITES</h2>
            <p className="specialities-names">
                <div className="osteoreflexology" data-tooltip={osteo}>Ostéoréflexologie</div>
                <div className="allergy" data-tooltip={bioEnergetic}>Bioénergétique</div>
                <div className="digestive" data-tooltip={digestive}>Troubles digestifs</div>
                <div className="skin" data-tooltip={skin}>Problèmes de peau</div>
                <div className="allergy" data-tooltip={allergy}>Allergies</div>
            </p>
        </>
    )
}

export default React.memo(Specialities);


