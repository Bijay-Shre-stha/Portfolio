import  { useState, useEffect } from 'react';
import './Navbar.css';
import zero from '../Images/Zero.png';

const Navbar = () => {
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
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${scrolled ? 'position-sticky' : ''}`}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img className='navbar__logo' src={zero} alt="myLogo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ms-auto">
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={() => onUpdateActiveLink('home')}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => onUpdateActiveLink('skills')}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={() => onUpdateActiveLink('about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => onUpdateActiveLink('projects')}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => onUpdateActiveLink('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
