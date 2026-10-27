/* 
camelCase
PascalCase
*/


const sidebarMenuItems = [
  {
    // id: Date.now(),
    id: crypto.randomUUID(),
    label: 'Dashboard',
    active: true
  },
  {
    // id: Date.now(),
    id: crypto.randomUUID(),
    label: 'Tasks',
    active: false
  },
  {
    // id: Date.now(),
    id: crypto.randomUUID(),
    label: 'Projects',
    active: false
  },
  {
    // id: Date.now(),
    id: crypto.randomUUID(),
    label: 'Team',
    active: false
  },
]

const SidebarMenuItems = ({ onMenuClick }) => {
  return (
    <nav className="flex flex-col gap-2">
      {
        sidebarMenuItems.map(item =>
          <a
            key={item.id}
            href="#"
            onClick={onMenuClick}
            className={`rounded-lg px-4 py-3 text-sm ${item.active ? 'bg-blue-50 text-blue-600 font-semibold' : 'font-medium text-gray-600 hover:bg-gray-200'}`}
          >
            {item.label}
          </a>
        )
      }
    </nav>
  )
}

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:justify-between md:pb-12 min-h-[90vh] w-64 bg-white border-r">
        <div className="flex flex-col py-4">
          <h2 className="my-8 text-2xl font-bold text-gray-900 md:hidden">
            Taskflow
          </h2>
          {/* Sidebar Menu Items */}
          <SidebarMenuItems />
        </div>
        {/* Settings */}
        <a
          href="#"
          className="rounded-lg p-4 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Settings
        </a>
      </aside>
      {/* Mobile Sidebar */}
      {
        isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* OverLay */}
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black/40"
            />
            <aside className="relative h-full w-64 bg-white shadow-2xl">
              <div className="flex items-center justify-between p-4">
                <h2 className="my-8 text-2xl font-bold text-gray-900">
                  Taskflow
                </h2>
                <button
                  onClick={onClose}
                  className="text-xl text-white bg-red-600 px-3 py-1 rounded-lg"
                >
                  x
                </button>
              </div>
              {/* Sidebar Menu Items */}
              <SidebarMenuItems
                onMenuClick={onClose}
              />
            </aside>
          </div>
        )
      }
    </>
  )
}

export default Sidebar;