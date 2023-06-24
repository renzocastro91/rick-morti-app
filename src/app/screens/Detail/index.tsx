import { useParams, Link } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

function Detail() {
  const { id } = useParams();
  const { data, error, loading } = useGetData<Character>(
    `https://rickandmortyapi.com/api/character/${id}`
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

  return (
    <div>
      {data && (
        <>
          <h1>Detalle {data.name}</h1>
          <img src={data.image}></img>
          <p><b>Nombre:</b> {data.status}</p>
          <p><b>Especie:</b> {data.species}</p>
          <p><b>Tipo:</b> {data.type}</p>
          <p><b>Género:</b> {data.gender}</p>
          <Link to={`/location/${id}`}><p><b>Origen:</b> {data.origin.name}</p></Link>
        </>
      )}
    </div>
  );
}

export default Detail;
