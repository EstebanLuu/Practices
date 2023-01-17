import Counter from "./Counter/Counter";
import { Link } from "react-router-dom";
import Usuario from "./Usuario/Usuario";

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
      <Counter />
      <Usuario />
    </div>
  );
}

export default AprendiendoHome;
