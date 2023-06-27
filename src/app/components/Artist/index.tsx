import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type ArtistProps = {
  id: string; 
  name: string;
  category: string;
  image: string;
  views: number;
  isFav?: boolean;
};

function Artist(props: ArtistProps) {
  const [isFav, setIsFav] = useState(props.isFav);

  function handleFav() {
    setIsFav(!isFav);
  }

  return (
    <div className={`${styles.card} ${styles.enlargedCard}`}>
      <button className={styles.favoriteButton} onClick={handleFav}>
        {isFav ? (
          <span className={styles.heartIconRed}>❤️</span>
        ) : (
          <span className={styles.heartIconBlack}>🖤</span>
        )}
      </button>
      <div className={styles.artistImageContainer}>
        <img className={styles.artistImage} src={props.image} alt={props.name} />
      </div>
      <div className={styles.artistInfo}>
        <h2>{props.name}</h2>
        <p className={styles.category}><b>Estado:</b> {props.category}</p>
        <p className={styles.cp}><b>Aparición en capítulos:</b> {props.views}</p>
      </div>
      <Link className="link" to={`/detail/${props.id}`}>Ver más información</Link>
    </div>
  );
}

export default Artist;
