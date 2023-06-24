import { useEffect, useState } from "react";
import Artist from "../../components/Artist";
import "./styles.css";

function Home() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    requestCharacters();
  }, []);

  async function requestCharacters() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const json = await res.json();

      setCharacters(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <div>
      <div>
      <h1 className="title">Personajes</h1>
      </div>
      
      {characters ? (
        characters.map((character) => {
          return (
            <Artist
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              song={character.status}
              views={character.episode.length}
            />
          );
        })
      ) : (
        <h1>Cargando...</h1>
      )}
      </div>
      
    </main>
  );
}

export default Home;