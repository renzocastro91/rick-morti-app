import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./screens/Detail";
import Location from "./screens/Location";
import Locations from "./screens/Locations";
import Episodes from "./screens/Episodes";
import Episode from "./screens/Episode";
import NotFound from "./screens/NotFound";
import Layout from "./components/Layout";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Episodes" element={<Episodes />}/>
          <Route path="/Episode/:id" element={<Episode />}/>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/location/:id" element={<Location/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;