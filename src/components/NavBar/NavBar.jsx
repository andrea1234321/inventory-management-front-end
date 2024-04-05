import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  
  return ( 
    <>
      <nav>
        <ul>
          <div>
            <li className="navAppTitle"><i className="fa-regular fa-moon"></i> 
              <NavLink to='/' className={location.pathname === '/' ? 'active' : ''}>Midnight </NavLink>
            </li>
          </div>
          <div className={styles.navLinks}>
            <li>
              <NavLink to="/warehouses"  className={location.pathname === '/warehouses' ? 'active' : ''}>Warehouses</NavLink>
            </li>
            <li>
              <NavLink to="/inventory" className={location.pathname === '/inventory' ? 'active' : ''}>Inventory</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
   );
}
 
export default NavBar;
