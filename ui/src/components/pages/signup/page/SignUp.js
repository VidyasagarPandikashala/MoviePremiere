import { useState } from "react";
import LoginBackground from "../../../shared/components/util-components/LoginBackground";
import styles from "./SignUp.module.css";

import { useNavigate } from "react-router-dom";
import signupApi from "../api/signupApi";

function SignUp() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  // const [passwordCheck, setPasswordCheck] = useState(true);
  function userNameInputHandler(event) {
    const usernameEntered = event.target.value;
    setUserDetails((prevSignUpDetail) => ({
      ...prevSignUpDetail,
      userName: usernameEntered,
    }));
  }
  console.log(userDetails.username);
  function passwordInputHandler(event) {
    const passwordEntered = event.target.value;

    setUserDetails((prevSignUpDetail) => ({
      ...prevSignUpDetail,
      password: passwordEntered,
    }));
  }

  function confirmPasswordInputHandler(event) {
    const confirmPasswordEntered = event.target.value;
    setUserDetails((prevSignUpDetail) => ({
      ...prevSignUpDetail,
      confirmPassword: confirmPasswordEntered,
    }));
  }

  function passwordValidator() {
    if (userDetails.password === userDetails.confirmPassword) {
      return true;
    } else if (userDetails.password !== userDetails.confirmPassword) {
      return false;
    }
  }

  function confirmPasswordBlurHandler(event) {
    if (!passwordValidator()) {
      event.target.value = "";
      setUserDetails((prevSignUpDetail) => ({
        ...prevSignUpDetail,
        userName: "",
        password: "",
        confirmPassword: "",
      }));
      // setPasswordCheck(false);
    }
  }

  function emailInputHandler(event) {
    const passwordEntered = event.target.value;

    setUserDetails((prevSignUpDetail) => ({
      ...prevSignUpDetail,
      email: passwordEntered,
    }));
  }

  function submitEvnetHandler(event) {
    event.preventDefault();
    console.log(userDetails);
    signupApi.postUserData(userDetails);
    return navigate("/");
  }

  return (
    <div className={styles.signup_background_container}>
      <div className={styles.login_background_container}>
        <LoginBackground></LoginBackground>
      </div>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={submitEvnetHandler}>
          <div className={styles.userNameContainer}>
            <input
              className={styles.userName}
              type="text"
              placeholder="username"
              name="username"
              required="true"
              onChange={userNameInputHandler}
            />
          </div>
          <div className={styles.passwordContainer}>
            <input
              className={styles.password}
              type="password"
              placeholder="password"
              name="password"
              required="true"
              onChange={passwordInputHandler}
            />
          </div>
          <div className={styles.passwordContainer}>
            <input
              className={styles.password}
              type="password"
              placeholder="confirm password"
              name="confirm password"
              required="true"
              onChange={confirmPasswordInputHandler}
              onBlur={confirmPasswordBlurHandler}
            />
          </div>
          <div className={styles.userNameContainer}>
            <input
              className={styles.userName}
              type="email"
              placeholder="email"
              required="true"
              onChange={emailInputHandler}
            />
          </div>
          <div>
            <button className={styles.sign_up_btn} type="submit">
              signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
