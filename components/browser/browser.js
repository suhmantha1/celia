import { useState } from "react";
import cn from "classnames";
import Intro from "../intro/intro";
import styles from "./browser.module.scss";

export default function Browser(props) {
  const [isIntro, setIsIntro] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [activeIntro, setActiveIntro] = useState(false);

  const onEnter = () => {
    setActiveIntro(true);
    setIsIntro(false);

    const audio = document.getElementById("audio");
    if (audio) {
      audio.play();
    }

    setTimeout(() => {
      setShowIntro(false);
      setActiveIntro(false);
    }, 2000);
  };

  return (
    <div className={styles.wrapper}>
      <audio loop id="audio">
        <source src="music.mp3" />
      </audio>
      <div className={cn(styles.bar, { [styles.introBar]: isIntro })}>
        <div className={styles.buttonWrapper}>
          {isIntro && (
            <div className={styles.intro}>Bonjour! C'est moi, Celia ❤️</div>
          )}
          {!isIntro && (
            <>
              <button
                onClick={() => {
                  alert(
                    "That's one secret I'll never tell! xoxo, JK! It's me, Celia!"
                  );
                }}
              >
                Who am I?
                <div className={styles.fireworks} aria-hidden="true" />
              </button>
              <button
                onClick={() => {
                  alert(
                    "Allison is my best friend and she has been missing ever since Gigi Hadid's annual hotdog party"
                  );
                }}
              >
                Where is Allison?
                <div className={styles.fireworks} aria-hidden="true" />
              </button>
              <button
                onClick={() => {
                  alert("Please reach out to my PR firm: New Beginnings");
                }}
              >
                Bachelor Contestants
                <div className={styles.fireworks} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <a
          className={styles.link}
          href="https://www.instagram.com/celia.rossow/"
          target="_blank"
        >
          <div className={styles.fireworks} aria-hidden="true" />
        </a>
      </div>
      {showIntro && <Intro onEnter={onEnter} isActive={activeIntro} />}
      {!isIntro && <>{props.children}</>}
    </div>
  );
}
