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
      return apiResponse.map((subFromApi) => {
        const {
          name: name,
          status: status,
          species: species,
          gender: gender,
          image: image,
          created: created,
          episode: episode,
          id: id,
          location: location,
          origin: origin,
          url: url,
        } = subFromApi;

        return {
          name,
          status,
          species,
          gender,
          image,
          created,
          episode,
          id,
          location,
          origin,
          url,
        };
      });
    };

    fetchResponse().then((apiSubs) => {
      const subs = mapFromApi(apiSubs);
      setSubs(subs);
    });
    // fetch("https://rickandmortyapi.com/api/character/")
    //   .then((res) => res.json())
    //   .then((subs) => {
    //     console.log(subs);
    //     setSubs(subs);
    //   });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App">
      <h1 className="app__title">Equipo Typescript</h1>
      <Form onNewSub={handleNewSub} />
      New Sub: {newSubNumber}
      <List subs={subs} />
    </div>
  );
}

export default App;
