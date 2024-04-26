
import { Link } from 'react-router-dom';

import Logo from '../assets/calendar.png';
import './styles/Header.css';

export const Header = () => {
  
  return (
    <header>
        <nav className='navigation'>
            <div className="navBar">
                <img src={Logo} alt="Logo Calendario" />
                <Link to="/">Calendar</Link>
            </div>
            <div className="login">
                <Link to="/">Login</Link>
            </div>
        </nav>        
    </header>
  )
}
