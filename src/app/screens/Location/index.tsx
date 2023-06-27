import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import "./styles.css";
import { useEffect, useState } from "react";
import Artist from "../../components/Artist";

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

function Location() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (data) {
      fetchCharacters(data.residents);
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
    <div className="cardLocation">
      <br />
      {data && (
        <>
          <h1>{data.name}</h1>
          <p className="p-d">
            <b>Nombre:</b> {data.name}
          </p>
          <p className="p-d">
            <b>Tipo:</b> {data.type}
          </p>
          <p className="p-d">
            <b>Dimensión:</b> {data.dimension}
          </p>
          <p className="p-d">
            <b>Creado:</b> {data.created}
          </p>

          <h2>Personajes que residen en {data.name}:</h2>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Artist
                key={character.id}
                id={character.id.toString()}
                image={character.image}
                name={character.name}
                category={character.status}
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

export default Location;
