import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Menu } from 'semantic-ui-react';
import './styles.scss';

function Navbar() {
    return (
      <div className="navbar">
        <Menu className="navbar-menu" text>
            <Menu.Item
                as={NavLink}
                to="/"
                className='navbar-menu-link'
                end
            >
                ACCUEIL
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/about"
                className='navbar-menu-link'
                end
            >
                A PROPOS
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/blog"
                className='navbar-menu-link'
                end
            >
                BLOG
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="prices"
                className='navbar-menu-link'
                end
            >
                FORMULES / TARIFS
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/booking"
                className='navbar-menu-link'
                end
            >
                SERVICES / RESERVATIONS
            </Menu.Item>
            <Menu.Item
                as={NavHashLink}
                to="/#contact-form"
                className='navbar-menu-link'
                end
            >
                CONTACT
            </Menu.Item>
        </Menu>
      </div>
    )
  }

  export default React.memo(Navbar);