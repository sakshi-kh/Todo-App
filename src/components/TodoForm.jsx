import { useState } from "react";

function TodoForm({ addTodo }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc) return;
    addTodo(name, desc);
    setName("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit" className="add-btn">Add Todo</button>
    </form>
  );
}

export default TodoForm;
