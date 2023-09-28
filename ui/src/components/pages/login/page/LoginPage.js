import { Link, useNavigate } from "react-router-dom";

import LoginBackground from "../../../shared/components/util-components/LoginBackground";
import styles from "./LoginPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus } from "../redux/LoginSlice";
import { useState } from "react";
import setCookie from "../../../shared/utils/cookies/setCookies";
import { getAllfavouritesForCurrentUser } from "../../favourite/redux/FavouritesSlice";

function LoginPage() {
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const [yetToLogin, setYetToLogin] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitEventHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const signInData = {
      userName: formData.get("username"),
      password: formData.get("password"),
    };

    const response = await dispatch(setLoggedInStatus(signInData));

    if (!response.payload) {
      setYetToLogin(true);
      setDisplayError(true);
      event.target.reset();
    } else {
      dispatch(getAllfavouritesForCurrentUser());
      const token = response.payload;
      setCookie("token", token, 2);
      setYetToLogin(true);
      setDisplayError(false);

      navigate("/");
    }
  }

  function showInvalidCredential() {
    if (!loginStatus && yetToLogin && displayError) {
      return <p>InvalidCredentials</p>;
    } else {
      <></>;
    }
  }
  return (
    <div className={styles.login_page_container}>
      <div className={styles.login_background_container}>
        <LoginBackground></LoginBackground>
      </div>
      <div className={styles.form_container}>
        <form
          id="loginForm"
          className={styles.form}
          onSubmit={submitEventHandler}
        >
          {showInvalidCredential()}
          <div className={styles.userNameContainer}>
            <input
              name="username"
              className={styles.userName}
              type="text"
              placeholder="username"
              required={true}

              // onBlur ={userNameOnBlur}
            />
          </div>
          <div className={styles.passwordContainer}>
            <input
              name="password"
              className={styles.password}
              type="password" // Change to 'password' type for password input
              placeholder="password"
              required={true}
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.login_btn} type="submit">
              Login
            </button>
          </div>
        </form>
        <div className={styles.signUpContainer}>
          <p className={styles.signUp}>
            <Link className={styles.anchorTag} to="/sign-up">
              CLICK HERE TO SIGNUP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
