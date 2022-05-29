import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavbarText,
    NavbarToggler,
    Button
} from 'reactstrap';
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to='/' style={{textDecoration: 'none', fontSize: 30, color: 'black', marginRight: 30}}>
                    React.Js
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <Link to="/" className='nav-link'>
                        <NavItem>
                            Home
                        </NavItem>
                    </Link>
                    <Link to="/about" className='nav-link'>
                        <NavItem>
                            About
                        </NavItem>
                    </Link>
                    <Link to="/mahasiswa" className='nav-link'>
                        <NavItem>
                            Mahasiswa
                        </NavItem>
                    </Link>
                    <Link to="/kelas" className='nav-link'>
                        <NavItem>
                            Class
                        </NavItem>
                    </Link>
                    <Link to="/hooks" className='nav-link'>
                        <NavItem>
                            Hooks
                        </NavItem>
                    </Link>
                    <Link to="/useeffects" className='nav-link'>
                        <NavItem>
                            Use Effects
                        </NavItem>
                    </Link>
                    <Link to="/produk" className='nav-link'>
                        <NavItem>
                            Produk
                        </NavItem>
                    </Link>
                    <Link to="/reducer" className='nav-link'>
                        <NavItem>
                            Reducer
                        </NavItem>
                    </Link>
                </Nav>
                <NavbarText style={{marginLeft: "auto"}}>
                    <Button color='danger'>
                        <i className='fa-solid fa-cart-shopping'> {value}</i>
                    </Button>
                </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;