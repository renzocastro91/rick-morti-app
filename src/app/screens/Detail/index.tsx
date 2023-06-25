import { useParams, Link } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import "./styles.css";

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
    <div className="cardDetail">
      {data && (
        <>
          <h1>{data.name}</h1>
          <img src={data.image} className="img-detail"></img>
          <p className="p-d"><b>Nombre:</b> {data.status}</p>
          <p className="p-d"><b>Especie:</b> {data.species}</p>
          <p className="p-d"><b>Tipo:</b> {data.type}</p>
          <p className="p-d"><b>Género:</b> {data.gender}</p>
          <Link to={`/location/${id}`}><p><b>Origen:</b> {data.origin.name}</p></Link>
          <br></br><br></br><br></br>
        </>
      )}
    </div>
  );
}

export default Detail;
