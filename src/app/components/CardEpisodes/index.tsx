import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type LocationsProps = {
  id: string;
  name: string;
  type: string;
};

function CardEpisodes(props: LocationsProps) {

  return (
    <div className={`${styles.card} ${styles.enlargedCard}`}>
      <div className={styles.artistInfo}>
        <h2>{props.name}</h2>
        <p className={styles.category}>{props.type}</p>
      </div>
      <br></br><br></br>
      <Link to={`/episode/${props.id}`}>Ver más información</Link>
    </div>
  );
}

export default CardEpisodes;