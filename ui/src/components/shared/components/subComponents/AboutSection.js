import styles from "./AboutSection.module.css";
function AboutSection() {
  return (
    <section className={styles.aboutSectionContainer}>
      <h3 className={styles.genre}>ACTION | ADVENTURE | WAR</h3>
      <h3 className={styles.actors}>Actor 1 | Actor 2 | Actor 3</h3>
      <h2 className={styles.storyLine}>Story Outline</h2>
      <p className={styles.storyLineDetail}>
        lorem kdsfflklfkj dsfjklsfjls fkjsfndslnklvjsd
        jdfkdjsfkldjsfkljsfnvldkfnklsdfksdfdsfhjvn dsfhndklsfnklsfjlsdfn
        dsjvcdsfnvsdnfkdnsvdf sdfsdflksdfklsfkln
      </p>
    </section>
  );
}

export default AboutSection;
