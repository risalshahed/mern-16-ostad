import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import Experiences from './pages/Experiences.jsx';
import Educations from './pages/Educations.jsx';
import Projects from './pages/Projects.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/experiences' Component={Experiences} />
          <Route path='/educations' Component={Educations} />
          <Route path='/projects' Component={Projects} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;