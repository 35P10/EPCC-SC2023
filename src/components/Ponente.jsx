import { useState } from 'react';
import styles from "../styles/cardP.module.scss";
import { linkedin } from "../assets";

function Ponente({ id, name, img, titulo, insti, bio }) {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    setShowBio(!showBio);
  };

  const hideBio = () => {
    setShowBio(false);
  };

  return (
    <div key={id} className={`${styles.card}`}>
      <div className={`${styles.image_content}`}>
        <div className={`${styles.card_image}`}>
          <img src={img} alt="" className={`${styles.card_img}`} />
        </div>
      </div>

      <div className={`${styles.card_content}`}>
        <div className={`${styles.names}`}>
          <h3 className={`${styles.name}`}>{name}</h3>
          <p className={`${styles.insti}`}>{insti}</p>
          <img src={linkedin} alt="" className={`${styles.social}`} />
        </div>

        <p className={`${styles.titulo}`}>{titulo}</p>

        {showBio && (
          <>
            <p className={`${styles.bio} ${styles.showBio}`}>{bio}</p>
            <button className={`${styles.read_more}`} onClick={hideBio}>
              Saber Menos
            </button>
          </>
        )}

        {!showBio && (
          <button className={`${styles.read_more}`} onClick={toggleBio}>
            Saber Más
          </button>
        )}
      </div>
    </div>
  );
}

export default Ponente;
