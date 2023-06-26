import { useParams, Link } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import "./styles.css";

function Detail() {
  const { id } = useParams();
  const { data, error, loading } = useGetData(
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

  // Extraer el ID del location de la URL
  const locationId = data.location.url.split("/").pop();
  // Extraer el ID del Origin de la URL
  const originId = data.origin.url.split("/").pop();

  return (
    <div className="cardDetail">
      {data && (
        <>
          <h1>{data.name}</h1>
          <img src={data.image} className="img-detail" alt={data.name} />
          <p className="p-d"><b>Nombre:</b> {data.name}</p>
          <p className="p-d"><b>Estado:</b> {data.status}</p>
          <p className="p-d"><b>Especie:</b> {data.species}</p>
          <p className="p-d"><b>Tipo:</b> {data.type}</p>
          <p className="p-d"><b>Género:</b> {data.gender}</p>
          <Link to={`/location/${originId}`}>
            <p><b>Origen:</b> {data.origin.name}</p>
          </Link>
          <Link to={`/location/${locationId}`}>
            <p><b>Ubicación:</b> {data.location.name}</p>
          </Link>
          <br /><br /><br />
        </>
      )}
    </div>
  );
}

export default Detail;
