import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {SideNav, SideNavItem, Button} from 'react-materialize'

class Navi extends Component {
    render() {
        return (
            <div>
                <SideNav
	trigger={<Button>SIDE NAV DEMO</Button>}
	options={{ closeOnClick: true }}
	>
	<SideNavItem userView
		user={{
			background: 'img/office.jpg',
			image: 'img/yuna.jpg',
			name: 'John Doe',
			email: 'jdandturk@gmail.com'
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
            </div>
        );
    }
}

export default Navi;