import { responseFromApi, Sub } from "@/types";
import axios from "axios";

export const getAllPJ = async (): Promise<responseFromApi> => {
  const res = await axios.get("https://rickandmortyapi.com/api/character/");
  // console.log(res.data.results);
  return res.data.results;
};

export const mapFromApi = (apiResponse: responseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      name: nick,
      image: avatar,
      status: description,
      gender: subMonths,
      id: id,
    } = subFromApi;

    return {
      nick,
      avatar,
      description,
      subMonths,
      id,
    };
  });
};

// no se como hacer lo que quiero hacerrrr
