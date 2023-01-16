import useNewPerson from "@/hooks/NewPerson";
import { Sub } from "@/types";
import React from "react";
import "./Form.scss";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewPerson();
  // const [inputValues, setInputValues] = useState();

  // Las funciones con eventos
  // Para sacar que tipo de eventos se quiere ejecutar se puede ejecutar el evento y ver qque tipo de evento en en onChange
  // Un ejemplo de esto lo podemos ver descomentando el handleChange (24-29), el useStateInputValues(12) y viendo el hover en el onChange(56-61)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispatch({ type: "clear" });
  };

  // const handleChange = (e) => {
  //   setInputValues({
  //     ...inputValues,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
          // onChange={(e) => {
          //   setInputValues({
          //     ...inputValues,
          //     [e.target.name]: e.target.value,
          //   });
          // }}
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
