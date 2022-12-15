import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components";
import { Form } from "./components";
import { Sub } from "./types";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu es moderador",
  },
  {
    nick: "nico",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=nico",
  },
];

interface AppState {
  subs: Sub[];
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App">
      <h1>Subs del canal</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
