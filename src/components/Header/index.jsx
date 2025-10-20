import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='nav-logo'>
                        <h1>
                            <Link to='/'>PingSpace</Link>
                        </h1>
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className='nav-item'>
                            <NavLink
                                to='/privacy'
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Політика конфіденційності
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/terms'
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Умови користування
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/FAQ'
                                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        className={`nav-toggle ${isMenuOpen ? 'is-active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
