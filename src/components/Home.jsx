import { useState } from "react";
import ModalForm from "./ModalForm.jsx";
import TodoList from "./TodoList.jsx";

const Home = () => {
  /* 
  List of States
   todos
   isModalOpen
   editingTodo
  */

  // Declare the States
  const [todos, setTodos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)

  const openAdd = () => {
    setEditingTodo(null)
    setIsModalOpen(true)
  }

  const handleAddTodo = title => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      createdAt: Date.now()   // not necessary for this project
    }

    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);

    // Close the Modal
    setIsModalOpen(false)
  }

  const openEdit = todo => {
    setEditingTodo(todo)
    setIsModalOpen(true)
  }

  const handleEditTodo = title => {
    setTodos(
      prevTodos => prevTodos.map(todo =>
        todo.id === editingTodo.id ? { ...todo, title } : todo
      )
    )
    setEditingTodo(null)
    setIsModalOpen(false)
  }

  const handleDeleteTodo = todo => {
    const isConfirmed = window.confirm('Are you sure you wanna delete this todo item?')
    if(isConfirmed) {
      setTodos(prevTodos =>
        prevTodos.filter(t => t.id !== todo.id)
      )
    }
  }

  const handleFormSubmit = title => {
    editingTodo
    ?
    handleEditTodo(title)
    :
    handleAddTodo(title)
  }


  return (
    <div className="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center bg-[#fbfbfb]">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Todo Application
        </h1>
        <button
          onClick={openAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 my-5 rounded"
        >
          Add a Todo
        </button>
      </div>

      {/* Modal Form */}
      {/* Create Modal Form Component */}
      <ModalForm
        initialTitle={editingTodo?.title ?? ''}   // ?? -> Null Coalescing Operator
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFormSubmit={handleFormSubmit}
      />

      {/* Todo List */}
      <TodoList
        todos={todos}
        onEdit={openEdit}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default Home;