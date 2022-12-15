import React from "react";
import "./List.scss";
import { Sub } from "@/types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <ul className="subs__ul">
      {subs.map((sub) => {
        return (
          <li className="subs__li" key={sub.nick}>
            <img className="subs__img" src={sub.avatar} alt={sub.avatar} />
            <h4 className="subs__name">
              {sub.nick} (<small>{sub.subMonths}</small>)
            </h4>
            <p className="subs__description">
              {!sub.description
                ? "This person has not description"
                : sub.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
