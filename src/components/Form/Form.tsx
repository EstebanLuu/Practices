import useNewPerson from "@/hooks/NewPerson";
import { Sub } from "@/types";
import React from "react";
import "./Form.scss";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewPerson();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispatch({ type: "clear" });
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
  };

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div className="form__sub__container">
      <h2>Crea un nuevo personaje</h2>
      <form onSubmit={handleSubmit} className="form__sub">
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="Status"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <input
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="Genero"
        />
        <button className="form__sub__button-create">Crear</button>
        <button
          onClick={handleClear}
          type="button"
          className="form__sub__button-clear"
        >
          Borrar
        </button>
      </form>
    </div>
  );
};

export default Form;
