import React from 'react';
import Speciality from '../../components/Speciality/Speciality';

import './styles.scss';

function Booking() {

    return (
        <>
            <div className="title-booking">
                <h1 className="title-booking-text">Une vie de découvertes</h1>
                <h2 id="booking-h2" className='title-booking-section'>PRESTATIONS / FORMULES</h2>
            </div>

            <div className='booking-content'>
                    <Speciality />
            </div>
        </>
    )
}

export default React.memo(Booking);