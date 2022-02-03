import { NavLink } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <NavLink className="nav-link" to={'/'}>
                    Contacts
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;