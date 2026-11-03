import TodoItem from "./TodoItem.jsx"

const TodoList = ({ todos, onEdit, onDelete }) => {
  if(todos.length === 0) {
    return <p>No todos. Add one</p>
  }

  return (
    <div>
      {
        todos?.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      }
    </div>
  )
}

export default TodoList