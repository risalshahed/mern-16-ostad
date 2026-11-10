import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      id: crypto.randomUUID(),
      name: 'Home',
      path: '/'
    },
    {
      id: crypto.randomUUID(),
      name: 'Experiences',
      path: '/experiences'
    },
    {
      id: crypto.randomUUID(),
      name: 'Educations',
      path: '/educations'
    },
    {
      id: crypto.randomUUID(),
      name: 'Projects',
      path: '/projects'
    },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <NavLink
            to='/'
            className='text-xl font-bold'
          >
            My Portfolio
          </NavLink>
          <div className="flex gap-5">
            {
              navItems.map(item =>
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-bold text-yellow-500'
                      : 'text-white'
                  }
                >
                  {item.name}
                </NavLink>
              )
            }
          </div>

        </div>
        
      </nav>
    </header>
  )
}

export default Header;