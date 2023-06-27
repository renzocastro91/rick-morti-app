import { useEffect, useState } from "react";
import Artist from "../../components/Artist";
import "./styles.css";

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  episode: string[];
}

function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    requestCharacters();
  }, []);

  async function requestCharacters(url?: string) {
    try {
      const res = await fetch(url || `https://rickandmortyapi.com/api/character`);
      const json = await res.json();

      setCharacters(json.results);
      setNextPage(json.info.next);
      setPrevPage(json.info.prev);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <div className="cardHome">
        <div>
          <h1 className="title">Personajes</h1>
        </div>

        {characters.length > 0 ? (
          characters.map((character: Character) => {
            return (
              <Artist
                key={character.id}
                id={character.id.toString()}
                image={character.image}
                name={character.name}
                category={character.status}
                views={character.episode.length}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
        <br></br><br></br><br></br>
        <div className="pagination">
          <button
            className="buttonp1"
            disabled={!prevPage}
            onClick={() => requestCharacters(prevPage || undefined)}
          >
            Anterior
          </button>
          <button
            className="buttonp1"
            disabled={!nextPage}
            onClick={() => requestCharacters(nextPage || undefined)}
          >
            Siguiente
          </button>
        </div>
        <br></br>
      </div>
    </main>
  );
}

export default Home;
