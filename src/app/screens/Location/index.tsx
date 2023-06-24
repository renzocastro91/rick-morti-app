import { useParams} from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

function Location() {
  const { id } = useParams();
  const { data, error, loading } = useGetData<Character>(
    `https://rickandmortyapi.com/api/location/${id}`
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
          <h1>Detalle de {data.name}</h1>
          <p>Nombre: {data.name}</p>
          <p><b>Tipo:</b> {data.type}</p>
          <p><b>Dimensión:</b> {data.dimension}</p>
        </>
      )}
    </div>
  );
}

export default Location;
