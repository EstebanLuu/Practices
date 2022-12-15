import { Sub } from "@/types";
import React, { SetStateAction, useState } from "react";
import "./Form.scss";

interface FormState {
  inputValues: Sub;
}

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleClear = () => {
    setInputValues({
      nick: "",
      subMonths: 0,
      avatar: "",
      description: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form__sub__container">
      <form onSubmit={handleSubmit} className="form__sub">
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button
          onClick={handleClear}
          type="button"
          className="form__sub__button"
        >
          Clear
        </button>
        <button className="form__sub__button">Save new sub</button>
      </form>
    </div>
  );
};

export default Form;
