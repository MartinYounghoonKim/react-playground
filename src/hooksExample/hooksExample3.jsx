import * as React from "react";

const HooksExample3 = () => {
  const ENTER_KEY_CODE = 13;
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  return (
    <div>
      <input
        type="text"
        value={todo}
        onKeyDown={(e) => {
          if (e.keyCode === ENTER_KEY_CODE) {
            setTodos(todos.concat({
              index: todos.length,
              todo,
            }));
            setTodo("");
          }
        }}
        onChange={(e) => setTodo(e.target.value)}
      />
      <ul>
        {todos.map(({ index, todo }) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default HooksExample3;
