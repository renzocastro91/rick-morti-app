import { useEffect, useState } from "react";
import CardEpisodes from "../../components/CardEpisodes";
import "./styles.css";

interface Episode {
  id: number;
  name: string;
  episode: string;
}

function Episodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [nextPage, setNextPage] = useState<string | undefined>(undefined);
  const [prevPage, setPrevPage] = useState<string | undefined>(undefined);

  useEffect(() => {
    requestEpisodes();
  }, []);

  async function requestEpisodes(url?: string) {
    try {
      const res = await fetch(url || `https://rickandmortyapi.com/api/episode`);
      const json = await res.json();

      setEpisodes(json.results);
      setNextPage(json.info.next);
      setPrevPage(json.info.prev);
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

        {episodes.length > 0 ? (
          episodes.map((episode) => {
            return (
              <CardEpisodes
                key={episode.id}
                id={episode.id.toString()}
                name={episode.name}
                type={episode.episode}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
        <br></br><br></br><br></br>
        <div className="pagination">
          <button
            className="buttonp"
            disabled={!prevPage}
            onClick={() => requestEpisodes(prevPage)}
          >
            Anterior
          </button>
          <button
            className="buttonp"
            disabled={!nextPage}
            onClick={() => requestEpisodes(nextPage)}
          >
            Siguiente
          </button>
        </div>
        <br></br>
      </div>
    </main>
  );
}

export default Episodes;
