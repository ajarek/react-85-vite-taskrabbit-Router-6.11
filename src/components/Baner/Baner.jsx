import {FaHandsHelping} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Baner.css'

const Baner = () => {
  return (
    <div className='baner'>
      <div className="modal">
         <h2>Sprowadź pomoc. Zyskaj szczęście.</h2>
        <Link to={'/fachowcy'} className='link'><FaHandsHelping/> Uzyskaj pomoc już dziś</Link>
        <div className="category">
          <button>Hydraulika</button>
          <button>Montaż TV</button>
          <button>Montaż Mebli</button>
          <button>Przeprowadzka</button>
          <button>Elektryka</button>
          <button>Sprzątanie</button>
        </div>

      </div>
    </div>
  )
}

export default Baner