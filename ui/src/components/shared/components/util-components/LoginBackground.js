import { Link } from "react-router-dom";
import styles from "./LoginBackground.module.css";
function LoginBackground() {
  return (
    <div>
      <Link to={"/"}>
        <div className={styles.title}>
          <h1 className={styles.movie}>MOVIE</h1>
          <h1 className={styles.premiere}>PREMIERE</h1>
        </div>
      </Link>
      <div className={styles.imageContainer}>
        <img
          src="photos/loginBackground.jpg"
          className={styles.poster}
          alt="login-background"
        ></img>
      </div>
    </div>
  );
}

export default LoginBackground;
