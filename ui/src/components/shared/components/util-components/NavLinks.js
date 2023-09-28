import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../pages/login/redux/LoginSlice";
import { clearData } from "../../../pages/favourite/redux/FavouritesSlice";

function NavLinks() {
  const loginStatus = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function logOutOnClickHandler() {
    dispatch(
      setLogout({
        authentication: loginStatus.isLoggedIn,
        userId: loginStatus.userId,
      })
    );
    dispatch(clearData());
  }
  return (
    <div className={styles.nav_links_container}>
      <ul className={styles.nav_list}>
        <li className={styles.list}>
          <Link className={styles.link} to="favourites">
            FAVORITES{" "}
          </Link>
        </li>
        <li className={styles.list}>
          <Link className={styles.link} to="sign-up">
            SIGN-UP
          </Link>
        </li>
        {loginStatus.isLoggedIn ? (
          <button className={styles.btnlogout} onClick={logOutOnClickHandler}>
            LOG-OUT
          </button>
        ) : (
          <li className={styles.list}>
            <Link className={styles.link} to="login">
              LOGIN
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
