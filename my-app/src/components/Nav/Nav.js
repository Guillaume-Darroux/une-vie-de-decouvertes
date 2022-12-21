import React, { useState } from 'react'
import { Menu } from "semantic-ui-react";


function Nav() {
    
    const [activeItem, setActiveItem]= useState("home");

    const handleItemClick = (e, { name }) => {setActiveItem({ activeItem: name }); console.log("click")}

    return (
        <div>
            <Menu pointing secondary>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleItemClick}
                />
            </Menu.Menu>
            </Menu>
        </div>
    )
}

export default React.memo(Nav);