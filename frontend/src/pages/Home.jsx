import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <ActiveNotes />
        <ArchivedNotes />
      </div>
    </>
  );
}

export default Home;
