import { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import zero from '../Images/Zero.png';

const MyNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg={scrolled ? 'light' : 'transparent'}
            variant="light"
            className={scrolled ? 'scrolled' : ''}
        >
            <div className="container-fluid">
                <Navbar.Brand href="/">
                    <img className="navbar__logo" src={zero} alt="myLogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="navbar-nav ml-auto ms-auto">
                        <Nav.Item>
                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}>
                                Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about"  className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('about')}>
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects"  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}>
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact"  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('contact')}>
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MyNavbar;
