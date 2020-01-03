import React from 'react';
import TodoListItem from "../TodoListItem";
import "./TodoList.css";
const TodoList = ({todos, onDeleted, onToggleImportant ,onToggleDone}) => {
  const elementsTodo = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={ id } className="list-group-item">
        <TodoListItem 
          { ...itemProps } 
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id) }
        />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list--group">
      { elementsTodo }
    </ul>
  );
};

export default TodoList;