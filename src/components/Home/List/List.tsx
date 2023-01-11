import React, { useState } from "react";
import "./List.scss";
import { Sub } from "@/types";
import { getAllPJ } from "../../Services";

interface Props {
  subs: Array<Sub>;
}

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

// const [subs, setSubs] = useState<AppState["subs"]>([]);
// const handleChange = (event: React.MouseEvent<HTMLElement>, id: number) => {
//   getCharacter(id).then(mapCharacter).then(setSubs);
// };

const List = ({ subs }: Props) => {
  return (
    <ul className="subs__ul">
      {subs.map((sub) => {
        return (
          <li
            className="subs__li"
            key={sub.id}
            // onClick={handleChange(parseInt(sub.id))}
          >
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
