import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./RatingStar.module.css";
// TODO Refactor :: combine rating star and starIcon as one
function RatingStar({ handleStarClick, starRated }) {
  return (
    <div className={styles.rating_star_wrapper}>
      <FontAwesomeIcon
        id={1}
        className={
          starRated === 1 || starRated > 1
            ? styles.star_icon_clicked
            : styles.star_icon
        }
        icon={faStar}
        onClick={() => handleStarClick(1)}
      />
      <FontAwesomeIcon
        id={2}
        className={
          starRated === 2 || starRated > 2
            ? styles.star_icon_clicked
            : styles.star_icon
        }
        icon={faStar}
        onClick={() => handleStarClick(2)}
      />
      <FontAwesomeIcon
        id={3}
        className={
          starRated === 3 || starRated > 3
            ? styles.star_icon_clicked
            : styles.star_icon
        }
        icon={faStar}
        onClick={() => handleStarClick(3)}
      />
      <FontAwesomeIcon
        id={4}
        className={
          starRated === 4 || starRated > 4
            ? styles.star_icon_clicked
            : styles.star_icon
        }
        icon={faStar}
        onClick={() => handleStarClick(4)}
      />
      <FontAwesomeIcon
        id={5}
        className={
          starRated === 5 || starRated > 5
            ? styles.star_icon_clicked
            : styles.star_icon
        }
        icon={faStar}
        onClick={() => handleStarClick(5)}
      />
    </div>
  );
}

export default RatingStar;
