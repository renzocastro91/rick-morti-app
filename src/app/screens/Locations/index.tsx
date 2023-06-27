import { useEffect, useState } from "react";
import CardLocations from "../../components/CardLocations";
import "./styles.css";

interface Location {
  id: number;
  name: string;
  type: string;
}

function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [nextPage, setNextPage] = useState<string | undefined>(undefined);
  const [prevPage, setPrevPage] = useState<string | undefined>(undefined);

  useEffect(() => {
    requestLocations();
  }, []);

  async function requestLocations(url?: string) {
    try {
      const res = await fetch(url || `https://rickandmortyapi.com/api/location`);
      const json = await res.json();

      setLocations(json.results);
      setNextPage(json.info.next);
      setPrevPage(json.info.prev);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main>
      <div className="cardLocations">
        <div>
          <br></br>
          <h1 className="title">Ubicaciones</h1>
        </div>

        {locations.length > 0 ? (
          locations.map((location) => {
            return (
              <CardLocations
                key={location.id}
                id={location.id.toString()}
                name={location.name}
                type={location.type}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
        <br></br><br></br><br></br>
        <div className="pagination">
          <button
            className="buttonp2"
            disabled={!prevPage}
            onClick={() => requestLocations(prevPage)}
          >
            Anterior
          </button>
          <button
            className="buttonp2"
            disabled={!nextPage}
            onClick={() => requestLocations(nextPage)}
          >
            Siguiente
          </button>
        </div>
        <br></br>
      </div>
    </main>
  );
}

export default Locations;
