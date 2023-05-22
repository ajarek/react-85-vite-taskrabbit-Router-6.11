import { useContext } from 'react'
import { AppContext } from '../../App'
import { FaHandsHelping } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './Baner.css'

const Baner = () => {
  const { setFilter } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='baner'>
      <div className='modal'>
        <h2>Sprowadź pomoc. Zyskaj szczęście.</h2>
        <Link
          to={'/fachowcy'}
          className='link'
          onClick={() => setFilter('')}
        >
          <FaHandsHelping /> Uzyskaj pomoc już dziś
        </Link>
        <div className='category'>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Hydraulika
          </button>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Montaż TV
          </button>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Montaż Mebli
          </button>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Przeprowadzki
          </button>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Elektryka
          </button>
          <button
            onClick={(e) => {
              setFilter(e.target.innerHTML)
              navigate('/fachowcy')
            }}
          >
            Sprzątanie domu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Baner
