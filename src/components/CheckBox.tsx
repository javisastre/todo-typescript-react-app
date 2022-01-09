import React from "react";
import { ITodoObject } from "./interfaces";

interface Props {
  data: ITodoObject;
  changeCheckBox: (id: number) => void;
}

const CheckBox: React.FC<Props> = (props) => {
  const {
    data: { title, done, id },
    changeCheckBox,
  } = props;

  return (
    <label className='checkbox-container'>
      <span className={done ? "completed" : ""}>{title}</span>
      <input
        type='checkbox'
        checked={done}
        onChange={() => changeCheckBox(id)}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default CheckBox;
