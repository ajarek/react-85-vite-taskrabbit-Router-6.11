import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <nav className='nav'>
     
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link link-text'
          to={'/'}
        >
          Główna
        </Link>
      
        
        <Link
          className='link link-text'
          to={'/contact'}
        >
          Kontakt
        </Link>
        
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
