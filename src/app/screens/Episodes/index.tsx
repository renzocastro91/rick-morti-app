import { useEffect, useState } from "react";
import CardEpisodes from "../../components/CardEpisodes";
import "./styles.css";

interface Character {
  id: number;
  name: string;
  episode: string;
}

function Episodes() {
  const [characters, setCharacters] = useState<Character[]>([]);

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

        {characters.length > 0 ? (
          characters.map((character: Character) => {
            return (
              <CardEpisodes
                key={character.id}
                id={character.id.toString()}
                name={character.name}
                type={character.episode}
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

export default Episodes;
