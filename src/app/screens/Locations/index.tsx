import { useEffect, useState } from "react";
import CardLocations from "../../components/CardLocations";
import "./styles.css";

interface Location {
  id: number;
  name: string;
  type: string;
}

function Locations() {
  const [characters, setCharacters] = useState<Location[]>([]);

  useEffect(() => {
    requestCharacters();
  }, []);

  async function requestCharacters() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/location`);
      const json = await res.json();

      setCharacters(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <div className="cardLocations">
        <div>
          <h1 className="title">Ubicaciones</h1>
        </div>

        {characters.length > 0 ? (
          characters.map((location) => {
            return (
              <CardLocations
                key={location.id}
                id={location.id.toString()}
                name={location.name}
                type={location.type}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
        <br /><br /><br />
      </div>
    </main>
  );
}

export default Locations;
