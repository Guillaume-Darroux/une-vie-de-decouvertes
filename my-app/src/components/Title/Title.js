import React from 'react';

import "./styles.scss";

function Title() {
    
    return (
        <div className="title">
            <h1 className="title-text">Une vie de découvertes</h1>
        </div>
    )
}

export default React.memo(Title);