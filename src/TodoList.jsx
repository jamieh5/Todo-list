import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deletedTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deletedTodo={deletedTodo}
        />
      ))}
    </ul>
  );
}
