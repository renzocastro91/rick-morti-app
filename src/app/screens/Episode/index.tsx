import { useParams} from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import Artist from "../../components/Artist";
import { useEffect, useState } from "react";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

function Episode() {
  const { id } = useParams();
  const { data, error, loading } = useGetData<Character>(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

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

//

//

  return (
    <div>
      {data && (
        <>
          <h1>Detalle de Episodio {data.name}</h1>
          <p>Nombre: {data.name}</p>
          <p><b>Episodio y Temporada:</b> {data.episode}</p>
          <p><b>Fecha de estreno: </b> {data.air_date}</p>
          <h2>Personajes que aparecen en este episodio son: </h2>
        </>
      )}
      
    </div>
  );
}

export default Episode;