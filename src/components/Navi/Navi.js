import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {SideNav, SideNavItem, Button, Icon} from 'react-materialize'
import './Navi.css';
class Navi extends Component {
    render() {
        return (
            <nav>
                <SideNav
	trigger={<Button>
            Navi
            </Button>}
	options={{ closeOnClick: true }}
	>
	<SideNavItem userView
		user={{
			image: 'img/yuna.jpg',
			name: 'John Doe',
		}}
	/>
	<SideNavItem href='#!icon' icon='cloud'><Link to="/woksa/home" className="navbar-brand">Home</Link></SideNavItem>
    <SideNavItem href='#!icon' icon='cloud'><Link to="/woksa/books" className="navbar-brand">Books</Link></SideNavItem>
    <SideNavItem href='#!icon' icon='cloud'><Link to="/woksa/characters" className="navbar-brand">Characters</Link></SideNavItem>
	<SideNavItem href='#!icon' icon='cloud'><Link to="/woksa/universe" className="navbar-brand">Universe</Link></SideNavItem>
    <SideNavItem href='#!icon' icon='cloud'><Link to="/woksa/about" className="navbar-brand">About</Link></SideNavItem>
    
	<SideNavItem divider />
	<SideNavItem subheader>Subheader</SideNavItem>
	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
    Stormlight Archives
    </nav>
        );
    }
}

export default Navi;