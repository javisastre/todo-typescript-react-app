import React, { useState } from "react";

interface Props {
  handleAddItem: (todo: string) => void;
}

const AddTodo: React.FC<Props> = (props) => {
  const { handleAddItem } = props;

  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddItem(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <input
        type='text'
        name='title'
        id='title'
        value={todo}
        className='add-input'
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type='submit'
        className='add-button'
        disabled={todo ? false : true}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
