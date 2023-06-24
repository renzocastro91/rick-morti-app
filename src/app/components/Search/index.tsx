import { useState } from "react";
import styles from "./styles.module.css";

function Search() {
  const [song, setSong] = useState("Holaaa")
  const [genere, setGenere] = useState("")
  const GENERES = ["Rock", "Pop", "Rap", "Heavy Metal"]
  return (
    <form className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <label htmlFor="song" className={styles.searchLabel}>
          Buscar Canción
        </label>
        <input type="text" id="song" className={styles.searchInput} value={song} onChange={(event) => setSong(event.target.value)} />
      </div>
      <label htmlFor="genere">Selecciona un género</label>
        <select id="genere" value={genere} onChange={(event) => setGenere(event.target.value)}>
            <option />
            {GENERES.map((element) => {
              return <option key={element} value={element}>{element}</option>
            })}
        </select>
        <br></br>
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
}

export default Search;
