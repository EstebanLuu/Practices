import React from "react";
import "./List.scss";
import { Sub } from "@/types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <ul className="subs__ul">
      {subs.map((sub, i) => {
        return (
          <li className="subs__li" key={i}>
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
