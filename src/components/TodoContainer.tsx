import React, { useState } from "react";
import dayjs from "dayjs";

import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import { ITodoObject } from "./interfaces";

const TodoContainer: React.FC = () => {
  const [todosList, setTodosList] = useState<ITodoObject[]>([]);

  const handleAddItem = (description: string) => {
    const newTodo: ITodoObject = {
      title: description,
      done: false,
      id: Date.now(),
    };
    setTodosList([newTodo, ...todosList]);
  };

  return (
    <div>
      <h1>{dayjs().format("dddd")}</h1>
      <h2>{dayjs().format("D [of] MMMM [of] YYYY")}</h2>
      <AddTodo handleAddItem={handleAddItem} />
      <TodosList todosList={todosList} setTodosList={setTodosList} />
    </div>
  );
};

export default TodoContainer;
