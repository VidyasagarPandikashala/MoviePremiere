import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FavouritesIcon.module.css";

function FavouritesIcon({ onToggle, classStyle, customClassNameFavIcon }) {
  return (
    <div
      className={styles[customClassNameFavIcon]}
      title="Add to fav"
      onClick={onToggle}
    >
      <FontAwesomeIcon icon={faHeart} className={styles[classStyle]} />
    </div>
  );
}

export default FavouritesIcon;
