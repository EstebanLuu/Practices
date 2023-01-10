import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components";
import { Form } from "./components";
import { responseFromApi, Sub } from "./types";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    const fetchResponse = (): Promise<responseFromApi> => {
      return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
        res.json()
      );
    };

    const mapFromApi = (apiResponse: responseFromApi): Array<Sub> => {
      return apiResponse.results.map((subFromApi) => {
        const {
          name: nick,
          image: avatar,
          status: description,
          gender: subMonths,
        } = subFromApi;

        return {
          nick,
          avatar,
          description,
          subMonths,
        };
      });
    };
    fetchResponse().then(mapFromApi).then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App">
      <h1 className="app__title">Equipo de Rick & Morty</h1>
      <Form onNewSub={handleNewSub} />
      <h4 style={{ color: "white" }}>Nuevos personajes: {newSubNumber}</h4>
      <List subs={subs} />
    </div>
  );
}

export default App;
