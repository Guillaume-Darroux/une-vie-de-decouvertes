import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

import './styles.scss';

class Contact extends PureComponent {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    //const { value } = this.state
    return (
      <div className="form-container" id="contact-form">
        <h2 className='contact-section'>CONTACT</h2>
        <Form action="https://formsubmit.co/celine.collet75@gmail.com" method="POST">
            <Form.Group widths='equal'>
                <Form.Input fluid type="text" name="Prénom" placeholder='Votre prénom' required />
                <Form.Input fluid type="text" name="Nom" placeholder='Votre nom' required />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid type="email" name="email" placeholder='Votre email' required  />
            </Form.Group>
            <Form.TextArea className="textarea" name="message" placeholder='Votre message...' />
            <Form.Button id="contact-send-button">Envoyer</Form.Button>
        </Form>
    </div>
    )
  }
}

export default Contact;