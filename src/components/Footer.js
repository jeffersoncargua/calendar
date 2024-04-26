import { Link } from 'react-router-dom';

import './styles/Footer.css';

export const Footer = () => {
  return (
    <footer>
        <p>
          <Link to='/'>@Calendar - 2030</Link>            
        </p>
    </footer>
  )
}
