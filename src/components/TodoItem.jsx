import { MdDelete, MdModeEdit } from "react-icons/md"

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between px-5 py-3 rounded mb-2">
      <p>
        {todo.title}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="py-1 rounded hover:bg-blue-100"
        >
          <MdModeEdit className="text-blue-500" />
        </button>
        <button
          onClick={() => onDelete(todo)}
          className="py-1 rounded hover:bg-red-100"
        >
          <MdDelete className="text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem