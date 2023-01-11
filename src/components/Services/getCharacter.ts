import { responseFromApi, Sub, CharacterResponse } from "@/types";
import axios from "axios";
import { useState } from "react";

export const getCharacter = async (id: number): Promise<CharacterResponse> => {
  const [data, setData] = useState([]);
  console.log(data);
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  console.log(res.data.results[id]);
  setData(data);
  return res.data.results[id];
};
