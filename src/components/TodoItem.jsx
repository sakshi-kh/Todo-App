function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
    return (
      <div className={`todo ${todo.completed ? "completed" : ""}`}>
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.desc}</p>
        </div>
        <div className="todo-buttons">
          {!todo.completed && (
            <button onClick={() => toggleComplete(index)} className="complete-btn">
              Complete
            </button>
          )}
          <button onClick={() => deleteTodo(index)} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  