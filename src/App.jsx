import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className='flex'>
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  )
}

export default App;