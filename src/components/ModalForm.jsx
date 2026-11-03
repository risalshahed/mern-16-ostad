import { useEffect, useRef, useState } from "react"

// Event Bubbling

const ModalForm = ({ isOpen, onClose, initialTitle, onFormSubmit }) => {
  const [title, setTitle] = useState(initialTitle)
  const inputRef = useRef(null);  // input auto focus hobe

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  useEffect(() => {
    if(isOpen) {
      setTimeout(() => {
        inputRef?.current?.focus(),
        0   // 0 milli second
      })
    }
  }, [isOpen])

  // Close the Modal when "Escape" is pressed
  useEffect(() => {
    function handleKey(e) {
      // console.log(e.key)
      if(e.key === 'Escape') onClose()
    }

    if(isOpen) document.addEventListener('keydown', handleKey);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKey);
    }
  }, [isOpen, onClose])

  // ''

  // Form Submit Handle
  const handleSubmit = e => {
    e.preventDefault();

    const trimmedTitle = title.trim()

    if(!trimmedTitle) return;

    onFormSubmit(trimmedTitle)
    // Clear Input Fields
    // ()
    setTitle('')
  }

  if( ! isOpen ) return;
  
  // else
  return (
    // Outer Layer
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-40"
    >
      {/* Modal */}
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">
          {initialTitle ? 'Update' : 'Add'} Todo
        </h2>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Close Modal Button */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded bg-red-500 text-white"
            >
              Cancel
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 rounded border bg-blue-500 text-white"
              disabled={!title.trim()}
            >
              {initialTitle ? 'Update' : 'Add'} List
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalForm