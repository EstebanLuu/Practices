import Counter from "./Counter/Counter";
import { Link } from "react-router-dom";
import Usuario from "./Usuario/Usuario";
import TimerPadre from "./Timer/TimerPadre";

function AprendiendoHome() {
  return (
    <div className="sigueAprendiendoContainer">
      <Link className="aprendiendo" to={"/"}>
        <button>volver</button>
      </Link>
      <div className="df title">
        Sigue aprendiendo
        <span className="icon">
          <i className="bx bxl-typescript"></i>
        </span>
      </div>
      <h3 className="title">Use State</h3>
      <Counter />
      <Usuario />
      <h3 className="title">Use Effect - Use Ref</h3>
      <TimerPadre />
    </div>
  );
}

export default AprendiendoHome;
