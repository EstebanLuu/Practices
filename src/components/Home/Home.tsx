import { useEffect, useState } from "react";
import { List } from "../index";
import { Form } from "../index";
import { Sub } from "@/types";
import { getAllPJ, mapFromApi } from "../Services";
import { Link, useParams } from "react-router-dom";
import HomeAprendiendo from "../Aprendiendo/Home";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}
function Home() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  useEffect(() => {
    getAllPJ().then(mapFromApi).then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <>
      <div className="App">
        <h1 className="app__title">Equipo de Rick & Morty</h1>
        <Form onNewSub={handleNewSub} />
        <h4 style={{ color: "white", textAlign: "center", margin: "10px" }}>
          Nuevos personajes: {newSubNumber}
        </h4>

        <Link className="aprendiendo" to={"/aprendiendo"}>
          <button>Other components</button>
        </Link>
        {/* USO DE LAS PROPS */}
        <List subs={subs} />
      </div>
    </>
  );
}

export default Home;
