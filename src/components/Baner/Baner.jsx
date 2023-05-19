import {FaHandsHelping} from 'react-icons/fa'
import './Baner.css'

const Baner = () => {
  return (
    <div className='baner'>
      <div className="modal">
         <h2>Sprowadź pomoc. Zyskaj szczęście.</h2>
        <button><FaHandsHelping/> Uzyskaj pomoc już dziś</button>
      </div>
    </div>
  )
}

export default Baner