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
    <div className={styles.NavLinksContainer}>
      <ul className={styles.navList}>
        <li>
          <Link to="favourites">favourites </Link>
        </li>
        <li>
          <Link to="sign-up">signup</Link>
        </li>
        {loginStatus.isLoggedIn ? (
          <button className={styles.btnlogout} onClick={logOutOnClickHandler}>
            Logout
          </button>
        ) : (
          <li>
            <Link to="login">login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavLinks;
