import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import "./styles.css"

function Layout() {
  return (
    <div className="div-Layout">
      <Nav />
      <Outlet />    
    </div>
    
  );
}

export default Layout;
