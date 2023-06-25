import { useParams} from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import "./styles.css"

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
    <div className="cardLocation">
      <br></br>
      {data && (
        <>
          <h1>{data.name}</h1>
          <p className="p-d"><b>Nombre:</b> {data.name}</p>
          <p className="p-d"><b>Tipo:</b> {data.type}</p>
          <p className="p-d"><b>Dimensión:</b> {data.dimension}</p>
        </>
      )}
      <br></br><br></br><br></br>
    </div>
  );
}

export default Location;
