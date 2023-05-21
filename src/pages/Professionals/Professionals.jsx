import data from '../../assets/data.json'
import {useNavigate } from 'react-router-dom'
import './Professionals.css'

// eslint-disable-next-line react/prop-types
const Professionals = () => {
  const navigate = useNavigate()
  const handleEdit = (e, id) => {
    navigate(`/fachowcy-edycja/${id}/`)
  }
  return (
    <div className='professionals'>
     {data.map((dt) =>{
      return (
        <div key={dt.id} className="card"  onClick={(e) => handleEdit(e, dt.id)}>
          <div className="img">
            <img src={dt.src} alt={dt.category} />
          </div>
          <div className="category">{dt.category}</div>
          <div className="payment">{dt.payment}</div>
          <div className="name">{dt.name}</div>

        </div>
      )
     })}
    </div>
  )
}

export default Professionals