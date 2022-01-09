import React from "react";
import CheckBox from "./CheckBox";
import { ITodoObject } from "./interfaces";

interface Props {
  todosList: ITodoObject[];
  setTodosList: React.Dispatch<React.SetStateAction<ITodoObject[]>>;
}

const TodosList: React.FC<Props> = (props) => {
  const { todosList, setTodosList } = props;

  const changeCheckBox = (id: number) => {
    const newList = todosList.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    });
    setTodosList(newList);
  };

  const clearList = () => {
    const clearedList = todosList.filter((todo) => !todo.done);
    setTodosList(clearedList);
  };

  return (
    <div className='todos-list-container'>
      {todosList.length === 0 && <p>No tasks!</p>}
      <ul className='todos-list'>
        {todosList.length !== 0 &&
          todosList.map((todo, i) => {
            return (
              <li key={todo.id}>
                <CheckBox data={todo} changeCheckBox={changeCheckBox} />
              </li>
            );
          })}
      </ul>
      {todosList.length ? (
        <button className='clear-button' onClick={clearList}>
          Clear all done
        </button>
      ) : null}
    </div>
  );
};

export default TodosList;
