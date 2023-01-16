import { useEffect, useState } from "react";
import { List } from "../index";
import { Form } from "../index";
import { Sub } from "@/types";
import { getAllPJ, mapFromApi } from "../Services";
import { Link, useParams } from "react-router-dom";

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
      <Link to={"/1"}>
        <div className="App">
          <h1 className="app__title">Equipo de Rick & Morty</h1>
          <Form onNewSub={handleNewSub} />
          <h4 style={{ color: "white" }}>Nuevos personajes: {newSubNumber}</h4>

          {/* USO DE LAS PROPS */}
          <List subs={subs} />
        </div>
      </Link>
    </>
  );
}

export default Home;
