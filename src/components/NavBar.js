import React from 'react';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useNavigate } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function MySideNav() {
    const navigate = useNavigate();

    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected);
                navigate('/' + selected);
            }}
            className='mysidenav'
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="comparison">
                    <NavText>Comparison</NavText>
                </NavItem>
                <NavItem eventKey="timeline">
                    <NavText>Timeline</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default MySideNav;


