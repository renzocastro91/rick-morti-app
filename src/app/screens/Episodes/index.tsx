import { useEffect, useState } from "react";
import CardEpisodes from "../../components/CardEpisodes";
import "./styles.css";

function Episodes() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    requestCharacters();
  }, []);

  async function requestCharacters() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode`);
      const json = await res.json();

      setCharacters(json.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <div className="cardEpisodes">
      <div>
      <h1 className="title">Episodios</h1>
      </div>
      
      {characters ? (
        characters.map((character) => {
          return (
            <CardEpisodes
              key={character.id}
              id={character.id}
              name={character.name}
              type={character.episode}
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

export default Episodes;