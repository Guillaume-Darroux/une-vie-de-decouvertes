import React, { PureComponent } from 'react'
import { Menu } from 'semantic-ui-react'
import './styles.scss';

export default class Navbar extends PureComponent {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="navbar">
        <Menu pointing secondary>
          <Menu.Item
            name='Accueil'
            active={activeItem === 'Accueil'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='A propos'
            active={activeItem === 'A propos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Blog'
            active={activeItem === 'Blog'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Formules / Tarifs'
            active={activeItem === 'Formules / Tarifs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Services / Réservations'
            active={activeItem === 'Services / Réservations'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}