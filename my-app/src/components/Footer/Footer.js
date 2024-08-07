import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import instagramLogo from '../../assets/images/instagram.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
// import logoPinterest from '../../assets/images/pinterest.svg';
// import logoYoutube from '../../assets/images/youtube.svg';

import './styles.scss';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
  
function Footer() {
    const instagramUrl = "https://www.instagram.com/uneviededecouvertes/";
    const facebookUrl = "https://www.facebook.com/celine.collet.39";
    const linkedinUrl = "https://www.linkedin.com/";

    return (
      <div className="footer">
        <Menu className="footer-menu" text>
            <Menu.Item
                as={NavLink}
                to="/"
                className='footer-menu-link'
                end
            >
                ACCUEIL
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/about"
                className='footer-menu-link'
                end
            >
                A PROPOS
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/blog"
                className='footer-menu-link'
                end
            >
                BLOG
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/booking"
                className='footer-menu-link'
                end
            >
                PRESTATIONS / FORMULES
            </Menu.Item>
            <Menu.Item
                as={NavHashLink}
                to="/#contact-form"
                className='footer-menu-link'
                end
            >
                CONTACT
            </Menu.Item>
        </Menu>
        <div className="footer-logos">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
                <img src={instagramLogo} alt="Logo Instagram" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
                <img src={facebookLogo} alt="Logo Facebook" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            {/* <img src={logoPinterest} alt="Logo Pinterest" />
            <img src={logoYoutube} alt="Logo Youtube" /> */}
        </div>
        <div className="footer-mentions">
        <p>© 2023 Guillaume Darroux - Tous droits réservés | <Link to="/mentions" className="footer-mentions">Mentions légales</Link></p>
        </div>
      </div>
    )
}

export default React.memo(Footer);