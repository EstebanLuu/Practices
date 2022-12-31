import useNewPerson from "@/hooks/NewPerson";
import { Sub } from "@/types";
import React, { SetStateAction, useReducer, useState } from "react";
import "./Form.scss";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] =
  //   useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewPerson();

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
    // setInputValues(INITIAL_STATE);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value,
    // });
  };

  return (
    <div className="form__sub__container">
      <h2>Forma parte del equipo</h2>
      <form onSubmit={handleSubmit} className="form__sub">
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.experienceMonths}
          type="text"
          name="experienceMonths"
          placeholder="Experience months"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="Description"
        />
        <button className="form__sub__button-create">Save new sub</button>
        <button
          onClick={handleClear}
          type="button"
          className="form__sub__button-clear"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
