import React, { useState } from "react";
import "./List.scss";
import { Sub } from "@/types";
import { getAllPJ } from "../../Services";

// PARA USAR LAS PROPS SE LAS DEBE DEFINIR EN UN INTERFACE E IMPORTAR LO LOS TYPES

interface Props {
  subs: Array<Sub>;
}

// SUBS ES UN ARRAY DEL TYPE SUB DEFINIDO EN types.d.ts

const List = ({ subs }: Props) => {
  return (
    <ul className="subs__ul">
      {subs.map((sub) => {
        return (
          <li className="subs__li" key={sub.id}>
            <img className="subs__img" src={sub.avatar} alt={sub.avatar} />
            <h4 className="subs__name">{sub.nick}</h4>
            <p className="subs__description">{sub.description}</p>
            <p className="subs__description">{sub.subMonths}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
