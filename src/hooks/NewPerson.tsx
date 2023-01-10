import { Sub } from "@/types";
import { useReducer } from "react";

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

// const fetchResponse = (): Promise<responseFromApi> => {
//   return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
//     res.json()
//   );
// };

const INITIAL_STATE = {
  nick: "",
  subMonths: "",
  avatar: "",
  description: "",
};

interface FormState {
  inputValues: Sub;
}

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;

    default:
      return state;
  }
};

const useNewPerson = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewPerson;
