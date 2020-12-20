import styles from "./intro.module.scss";

export default function Intro({ isActive, onEnter }) {
  return (
    <div className={isActive ? styles.active : ""}>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={() => onEnter()}>
          Click to Enter
        </button>
        <div className={styles.fireworks} aria-hidden="true" />
        <img
          className={styles.eiffel}
          src="/images/eiffel-tower.png"
          alt="eiffel tower / celia's second home"
        />
        <img
          className={styles.baguette}
          src="/images/baguette.png"
          alt="a delicious baguette"
        />
      </div>
    </div>
  );
}
