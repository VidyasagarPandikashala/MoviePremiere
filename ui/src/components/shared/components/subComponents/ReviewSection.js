import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ReviewSection.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import setCookie from "../../utils/cookies/setCookies";
import reviewApi from "../../../pages/movie/api/reviewApi";
import RatingStar from "../util-components/RatingStar";
import StarIcon from "../util-components/StarIcon";
function ReviewSection({ movieId, reviewExist }) {
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const [starRated, setStarRated] = useState(-1);
  const [currentUserRating, setCurrentUserRating] = useState({});
  const [allUserRating, setAllUserRating] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    reviewApi
      .fetchAllRating(movieId)
      .then((response) => response.json())
      .then((data) => console.log(data));
    reviewApi
      .fetchAllRating(movieId)
      .then((response) => response.json())
      .then((data) => setAllUserRating(data));
  }, [movieId]);

  useEffect(() => {
    if (loginStatus && reviewExist) {
      reviewApi
        .fetchUserRating(movieId)
        .then((response) => response.json())
        .then((data) => console.log(data));

      reviewApi
        .fetchUserRating(movieId)
        .then((response) => response.json())
        .then((data) => setCurrentUserRating(data));
    }
  }, [movieId, loginStatus, reviewExist]);

  function handleStarClick(starIndex) {
    if (loginStatus) {
      setStarRated(starIndex);
    } else {
      navigate("/login");
    }
  }
  useEffect(() => {
    console.log(currentUserRating);
  }, [currentUserRating]);

  function handleSubmit(event) {
    event.preventDefault();
    if (loginStatus) {
      const formData = new FormData(event.target);
      const reviewObject = {
        rating: starRated,
        description: formData.get("review-description-area"),
      };

      reviewApi.saveReview(reviewObject, movieId);
      console.log("Review submitted");
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  function filterOutCurrentUser() {
    console.log(allUserRating);

    // Check if allUserRating is available and has data
    if (allUserRating && allUserRating.length > 0) {
      const filteredData = allUserRating.filter(
        (eachUserRating) =>
          eachUserRating.user?.userId !== currentUserRating.user?.userId
      );
      return filteredData;
    }

    // Return an empty array if allUserRating is not available or empty
    return [];
  }
  return (
    // <>
    //   {(!loginStatus || (loginStatus && !reviewExist)) && (
    //     <div className={styles.review_section_wrapper}>
    //       <RatingStar starRated={starRated} handleStarClick={handleStarClick} />
    //       <form id="reviewform" onSubmit={handleSubmit}>
    //         <textarea
    //           className={styles.textarea}
    //           name="review-description-area"
    //           rows="5"
    //           cols="30"
    //           minlength="10"
    //           maxlength="200"
    //           placeholder="descibe about the movie in less than 200 words"
    //         ></textarea>
    //         <button type="submit">submit</button>
    //       </form>
    //       {allUserRating ? (
    //         allUserRating.map((eachUserRating) => {
    //           return (
    //             <>
    //               <StarIcon starRated={eachUserRating.rating}></StarIcon>
    //               <div>{eachUserRating.user.userName}</div>
    //               <div className={styles.userDescription}>
    //                 {eachUserRating.description}
    //               </div>
    //             </>
    //           );
    //         })
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //   )}
    //   {loginStatus && reviewExist && (
    //     <>
    //       <div className={styles.review_section_wrapper}>
    //         <div className={styles.current_user_review_section_wrapper}>
    //           <>
    //             <StarIcon starRated={currentUserRating.rating} />
    //             <div className={styles.userDescription}>
    //               {currentUserRating.description}
    //             </div>
    //           </>
    //         </div>

    //         <div className={styles.all_user_review_section_wrapper}>
    //           {filterOutCurrentUser().map((filteredUserRating) => (
    //             <div>
    //               <StarIcon starRated={filteredUserRating.rating}></StarIcon>
    //               <div className={styles.userDescription}>
    //                 {filteredUserRating.description}
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </>

    <div className={styles.section_wrapper}>
      {(!loginStatus || (loginStatus && !reviewExist)) && (
        <>
          <div className={styles.rating_form_wrapper}>
            <RatingStar
              starRated={starRated}
              handleStarClick={handleStarClick}
            />
            <form id="reviewform" onSubmit={handleSubmit}>
              <div className={styles.review_form}>
                <textarea
                  className={styles.textarea}
                  name="review-description-area"
                  rows="5"
                  cols="30"
                  minlength="10"
                  maxlength="200"
                  placeholder="descibe about the movie in less than 200 words"
                ></textarea>
                <div>
                  <button className={styles.review_submit_btn} type="submit">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.all_user_rating}>
            {allUserRating ? (
              allUserRating.map((eachUserRating) => {
                return (
                  <>
                    <div className={styles.each_user_rating_wrapper}>
                      <div className={styles.username_rating_wrapper}>
                        <div>
                          <StarIcon
                            starRated={eachUserRating.rating}
                          ></StarIcon>
                        </div>
                        <div className={styles.username}>
                          {eachUserRating.user.userName}
                        </div>
                      </div>
                      <div className={styles.userDescription}>
                        {eachUserRating.description}
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </>
      )}

      <div className={styles.review_list_wrapper}>
        {loginStatus && reviewExist && (
          <>
            <div className={styles.current_user_review}>
              <div className={styles.current_username_ratingstar_wrapper}>
                <div className={styles.current_user_rating_star}>
                  <StarIcon starRated={currentUserRating.rating} />
                </div>
                <div className={styles.current_username_wrapper}>
                  {/* <p className={styles.username}>
                    {currentUserRating.user.userName}
                  </p> */}
                </div>
              </div>
              <div className={styles.current_user_description}>
                <p> {currentUserRating.description}</p>
              </div>
            </div>
            <div className={styles.all_user_rating}>
              {filterOutCurrentUser().map((filteredUserRating) => (
                <>
                  {" "}
                  <div className={styles.each_user_rating_wrapper}>
                    <div className={styles.username_rating_wrapper}>
                      <div className={styles.rating_star}>
                        <StarIcon
                          starRated={filteredUserRating.rating}
                        ></StarIcon>
                      </div>
                      {/* <div className={styles.username_wrapper}>
                        <p className={styles.username}>
                          {filteredUserRating.user.userName}
                        </p>
                      </div> */}
                    </div>
                    <div className={styles.all_user_description}>
                      <p> {filteredUserRating.description}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReviewSection;
