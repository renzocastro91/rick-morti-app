import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
      <div className="nav-d">
          <ul>
        <li>
          <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" className="logo"></img>
        </li>
        <li>
          <Link className="link-t" to="/">Personajes </Link>   
        </li>
        <li>
          <Link className="link-t" to="/Locations">Ubicaciones </Link>
        </li>
        <li>
          <Link className="link-t" to="/Episodes">Episodios </Link>
        </li>
      </ul>
      </div>  
      
    
  );
}

export default Nav;
