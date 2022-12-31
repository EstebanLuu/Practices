import { Sub } from "@/types";
import { useReducer } from "react";

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
  }
};

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

const INITIAL_STATE = {
  nick: "",
  experienceMonths: "",
  avatar: "",
  description: "",
};

interface FormState {
  inputValues: Sub;
}

const useNewPerson = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewPerson;
