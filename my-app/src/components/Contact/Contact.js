import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

import './styles.scss';

class Contact extends PureComponent {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    //const { value } = this.state
    return (
      <div className="form-container">
        <h2 className='news-title'>CONTACT</h2>
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid placeholder='Votre prénom' />
                <Form.Input fluid placeholder='Votre nom' />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid placeholder='Votre email' />
            </Form.Group>
            <Form.TextArea placeholder='Votre message...' />
            <Form.Button>Envoyer</Form.Button>
        </Form>
    </div>
    )
  }
}

export default Contact;