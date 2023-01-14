import { useEffect, useState } from "react";
import { List } from "../index";
import { Form } from "../index";
import { Sub } from "@/types";
import { getCharacter, mapFromApi } from "../Services";
import { CharacterResponse } from "@/types";
import axios from "axios";
import { useParams } from "react-router-dom";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function Detail() {
  const { id } = useParams();

  const [apiResponse, setApiResponse] = useState([]);

  const API = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const res = await fetch(API).then((res) => res.json());
      setApiResponse(res);
    });
  }, [API]);
  return (
    <div className="App">
      <h1 className="app__title">Detail from - {id}</h1>
      {/* <ul>
        {apiResponse.map((character) => {
          <li className="subs__li" key={character.id}>
            <img
              className="subs__img"
              src={character.avatar}
              alt={character.avatar}
            />
            <h4 className="subs__name">{character.name}</h4>
            <p className="subs__description">{character.description}</p>
            <p className="subs__description">{character.subMonths}</p>
          </li>;
        })}
      </ul> */}
    </div>
  );
}

export default Detail;
