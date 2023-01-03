import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import imgOsteo from "../../assets/images/osteo.jpg"

import './styles.scss';

function Booking() {
    return (
        <>
            <div className="title-booking">
                <h1 className="title-booking-text">Une vie de découvertes</h1>
                <h2 id="booking-h2" className='title-booking-section'>SERVICES / RESERVATIONS</h2>
            </div>

            <div className='booking-content'>
                <div className="card-container">
                    <div>
                        <Card
                        className="speciality-card osteo-card"
                        >
                        <Image src={imgOsteo} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Osteoreflexologie</Card.Header>
                            <Card.Meta>
                                durée : 45 min
                            </Card.Meta>
                            <Card.Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius fuga placeat? Exercitationem, animi consequatur ipsum eum commodi neque deserunt voluptatibus eius natus labore expedita quis fuga amet quidem molestiae!
                            </Card.Description>
                            <Button className="booking-osteo-button" secondary>Réserver</Button>
                        </Card.Content>
                        </Card>
                    </div>
                    <div>
                        <Card
                        className="speciality-card digestive-card"
                        >
                        <Image src={imgOsteo} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Troubles digestifs</Card.Header>
                            <Card.Meta>
                                Durée : 1h30
                            </Card.Meta>
                            <Card.Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius fuga placeat? Exercitationem, animi consequatur ipsum eum commodi neque deserunt voluptatibus eius natus labore expedita quis fuga amet quidem molestiae!
                            </Card.Description>
                            <Button className="booking-digestive-button" secondary>Réserver</Button>
                        </Card.Content>
                        </Card>
                    </div>
                    <div>
                        <Card
                        className="speciality-card skin-card"
                        >
                        <Image src={imgOsteo} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Problèmes de peau</Card.Header>
                            <Card.Meta>
                                Durée : 1h00
                            </Card.Meta>
                            <Card.Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius fuga placeat? Exercitationem, animi consequatur ipsum eum commodi neque deserunt voluptatibus eius natus labore expedita quis fuga amet quidem molestiae!
                            </Card.Description>
                            <Button className="booking-skin-button" secondary>Réserver</Button>
                        </Card.Content>
                        </Card>
                    </div>
                    <div>
                        <Card
                        className="speciality-card allergy-card"
                        >
                        <Image src={imgOsteo} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Allergies</Card.Header>
                            <Card.Meta>
                                Durée : 30 min
                            </Card.Meta>
                            <Card.Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius fuga placeat? Exercitationem, animi consequatur ipsum eum commodi neque deserunt voluptatibus eius natus labore expedita quis fuga amet quidem molestiae!
                            </Card.Description>
                            <Button className="booking-allergy-button" secondary>Réserver</Button>
                        </Card.Content>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Booking);