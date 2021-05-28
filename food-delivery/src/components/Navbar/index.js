import React, {Fragment} from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

function Navbar(props) {
    return (
        <Fragment>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </Fragment>
    );
}

export default Navbar;