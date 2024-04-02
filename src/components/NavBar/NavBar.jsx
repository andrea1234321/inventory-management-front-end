import { Link, NavLink } from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = () => {
  return ( 
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/warehouses">Warehouses</NavLink>
          </li>
          <li>
            <NavLink to="/inventory">Inventory</NavLink>
          </li>
        </ul>
      </nav>
    </>
   );
}
 
export default NavBar;
