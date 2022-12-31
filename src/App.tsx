import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components";
import { Form } from "./components";
import { responseFromApi, Sub } from "./types";

const INITIAL_STATE = [
  {
    nick: "Nicolás",
    experienceMonths: "10",
    avatar:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNmHMc29UCVkhy9IHRMWu4rrfS2N9XuedSCtLflTIfuH-vA9IaPm8lL03MGrtutG-uoQ&usqp=CAU",
    description: "Frontend Founder",
  },
  // https://i.pravatar.cc/150?u=dapelu
];

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    const fetchResponse = (): Promise<responseFromApi[]> => {
      return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
        res.json()
      );
    };

    // const mapFromApi = (apiResponse: responseFromApi): Sub[] => {return apiResponse.map(personaje => {
    //   const
    // })

    // };

    fetchResponse().then((data) => {
      console.log(data);
      setSubs(data);
    });
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
