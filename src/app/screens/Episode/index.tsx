import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Artist from "../../components/Artist";
import "./styles.css";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
}

function Episode() {
  const { id } = useParams();
  const { data, error, loading } = useGetData<Character>(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (data) {
      fetchCharacters(data.characters);
    }
  }, [data]);

  const fetchCharacters = async (characterUrls: string[]) => {
    try {
      const charactersResponse = await Promise.all(
        characterUrls.map((url) => fetch(url).then((res) => res.json()))
      );
      setCharacters(charactersResponse);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>Error en la petición!!</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div className="cardEpisode">
      {data && (
        <>
          <h1>Episodio {data.name}</h1>
          <p>
            <b>Nombre:</b> {data.name}
          </p>
          <p>
            <b>Episodio y Temporada:</b> {data.episode}
          </p>
          <p>
            <b>Fecha de estreno: </b> {data.air_date}
          </p>
          <h2 className="h2-ep">Personajes que aparecen en este episodio son: </h2>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Artist
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                song={character.status}
                views={character.episode.length}
              />
            ))
          ) : (
            <h3>No hay personajes disponibles</h3>
          )}
        </>
      )}
      <br /><br /><br />
    </div>
  );
}

export default Episode;
