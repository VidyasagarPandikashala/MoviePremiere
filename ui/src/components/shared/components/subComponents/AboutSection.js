import styles from "./AboutSection.module.css";
function AboutSection({ movieData }) {
  console.log(movieData);
  return (
    <section className={styles.aboutSectionContainer}>
      <h3 className={styles.genre}>
        {movieData.genres.reduce((genres, eachGenre, index) => {
          if (index === 0) {
            genres = genres + eachGenre;
          } else {
            genres = genres + "  |  " + eachGenre;
          }
          return genres;
        }, "")}
      </h3>
      <h3 className={styles.actors}>Actor 1 | Actor 2 | Actor 3</h3>
      <div className={styles.storyline_wrapper}>
        <h2 className={styles.storyLine}>STORY OUTLINE</h2>
        <p className={styles.storyLineDetail}>{movieData.movieDescription}</p>
      </div>
    </section>
  );
}

export default AboutSection;
