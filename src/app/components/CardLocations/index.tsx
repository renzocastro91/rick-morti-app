import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type LocationsProps = {
  id: string;
  name: string;
  type: string;
};

function CardLocations(props: LocationsProps) {

  return (
    <div className={`${styles.card} ${styles.enlargedCard}`}>
      <div className={styles.artistInfo}>
        <h2>{props.name}</h2>
        <p className={styles.category}>{props.type}</p>
      </div>
      <br></br>
      <Link to={`/location/${props.id}`}>Ver más información</Link>
    </div>
  );
}

export default CardLocations;