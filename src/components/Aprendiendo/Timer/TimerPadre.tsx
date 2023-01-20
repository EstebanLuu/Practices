import { useState } from "react";
import Timer from "./Timer";

const TimerPadre = () => {
  const [milesimas, setMilesimas] = useState(1000);
  return (
    <div className="section__withoutBorder">
      <span>Milisegundos {milesimas}</span>

      <br />

      <button className="button" onClick={() => setMilesimas(1000)}>
        1000
      </button>
      <button className="button" onClick={() => setMilesimas(2000)}>
        2000
      </button>

      <Timer milesimas={milesimas} />
    </div>
  );
};

export default TimerPadre;

// we
