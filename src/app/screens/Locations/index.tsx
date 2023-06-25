import { useEffect, useState } from "react";
import CardLocations from "../../components/CardLocations";
import "./styles.css";

function Locations() {
  const [characters, setCharacters] = useState();

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
      
      {characters ? (
        characters.map((character) => {
          return (
            <CardLocations
              key={character.id}
              id={character.id}
              name={character.name}
              type={character.type}
            />
          );
        })
      ) : (
        <h1>Cargando...</h1>
      )}
      <br></br><br></br><br></br>
      </div>
      
    </main>
  );
}

export default Locations;