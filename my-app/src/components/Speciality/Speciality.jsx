import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';
import { Card, Grid, Image } from 'semantic-ui-react';
import { PopupButton } from "react-calendly";

import "./style.scss";


function Speciality () {

    const [isLoading, setIsLoading] = useState(true);
    const [specialities, setSpecialities] = useState(null);

    useEffect(() => {
        
        fetch(`${API_URL}/api/prestations/?populate=*`, 
        {
            method: "GET",
            headers: {
                "Accept": "Application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
           console.log("res",res);
           setSpecialities(res.data);
           setIsLoading(false);
        });

    }, []);

    return (

        <Grid className="specialities-container" centered container stackable>
        {isLoading ?
                "Loading..."
            :
                specialities.map((speciality) => (
                        <div>
                            <Card key={speciality.id} className="specialities-container-post">
                                <Image className="speciality-image" src={
                                    speciality.attributes.image.data.attributes !== undefined ?
                                        API_URL + speciality.attributes.image.data.attributes.url
                                    :
                                        "..."
                                } />
                                <Card.Content>
                                    <Card.Header>{speciality.attributes.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='duration'>{speciality.attributes.duration}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                    {speciality.attributes.description.substring(0,150)} ...
                                    </Card.Description>
                                    <PopupButton
                                        className="calendly-booking-button"
                                        url={speciality.attributes.calendly}
                                        rootElement={document.getElementById("root")}
                                        text="Réserver"
                                    />
                                </Card.Content>
                            </Card>
                        </div>
                ))
            }
        </Grid>



    )
}

export default React.memo(Speciality);


