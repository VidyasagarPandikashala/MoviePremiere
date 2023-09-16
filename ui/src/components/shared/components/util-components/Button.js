import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ action, redirect }) {
  return (
    <Link to={`/${redirect}`}>
      <button className={styles.btn}>{action}</button>
    </Link>
  );
}

export default Button;
