import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
      <div className="nav-d">
          <ul>
        <li>
          <img src="https://e7.pngegg.com/pngimages/539/667/png-clipart-rick-sanchez-rick-and-morty-coloring-book-exclusive-and-unique-rick-and-morty-season-3-television-show-rick-and-morty-season-2-rick-morty-space-morty-smith.png" className="logo"></img>
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
