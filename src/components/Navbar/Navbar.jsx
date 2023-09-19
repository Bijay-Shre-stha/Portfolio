import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a href="/" className="navbar-brand"><img className='navbar__logo' src="https://doko.dwit.edu.np/assets/images/doko_logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
