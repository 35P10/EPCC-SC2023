import { ponentes } from "../constants";
import styles from "../styles/ponente.module.scss";
import Ponente from "./Ponente";
import React, { useState } from "react";

function Ponentes() {
  const [visible, setVisible] = useState(4);
  const [showButton, setShowButton] = useState(true);

  const showMoreItems = () => {
    const newVisible = visible + 4;
    if (newVisible >= ponentes.length) {
      // Mostrar todos los elementos y ocultar el botón "Conocer Más"
      setVisible(ponentes.length);
      setShowButton(false);
    } else {
      // Mostrar 4 elementos adicionales
      setVisible(newVisible);
    }
  };

  const hideItems = () => {
    // Mostrar solo los primeros 4 elementos y mostrar el botón "Conocer Más"
    setVisible(4);
    setShowButton(true);
  };

  return (
    <section className={`${styles.pcontainer}`}>
      <h2>Ponentes</h2>
      <div className={`${styles.container}`}>
        {ponentes.slice(0, visible).map((ponente) => (
          <div className={`${styles.ponente}`} key={ponente.id}>
            <Ponente
              id={ponente.id}
              name={ponente.name}
              img={ponente.img}
              titulo={ponente.titulo}
              insti={ponente.insti}
              bio={ponente.bio}
            />
          </div>
        ))}
      </div>
      {showButton ? (
        <button className={`${styles.boton}`} onClick={showMoreItems}>
          Conocer Más
        </button>
      ) : (
        <button className={`${styles.boton}`} onClick={hideItems}>
          Ocultar
        </button>
      )}
    </section>
  );
}

export default Ponentes;