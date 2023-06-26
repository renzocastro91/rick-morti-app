import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type ArtistProps = {
  id: string; // Agregar la propiedad 'id' al tipo 'ArtistProps'
  name: string;
  category: string;
  image: string;
  views: number;
  isFav?: boolean;
};

function Artist(props: ArtistProps) {
  const [views, setViews] = useState(props.views);
  const [isFav, setIsFav] = useState(props.isFav);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setViews(views + 1);
    }
  }

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
        <p>{views}</p>
        <h2>{props.name}</h2>
        <p className={styles.category}>{props.category}</p>
      </div>
      <button onClick={handlePlayPause} type="button" className={styles.playButton}>
        {isPlaying ? (
          <span className={styles.pauseIcon}>▌▌</span>
        ) : (
          <span className={styles.playIcon}>▶</span>
        )}
      </button><br></br>
      <Link to={`/detail/${props.id}`}>Ver más información</Link>
    </div>
  );
}

export default Artist;
