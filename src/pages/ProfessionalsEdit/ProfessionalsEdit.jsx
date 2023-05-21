import './ProfessionalsEdit.css'
import {  useParams,useNavigate } from 'react-router-dom'
import {
  FaFacebook,
  FaPhoneAlt,
  FaMailBulk,
} from 'react-icons/fa'
import data from '../../assets/data.json'

const ProfessionalsEdit = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const professional = data.find((el) => el.id === id)

  return (
    <div className='professionals-edit'>
      <button
          className='btn-back'
          onClick={() => navigate(-1)}
        >
          <span>Go Back 🔙</span>
        </button>
      <div className='professional-wrapper'>
        <div className='img'>
          <img
            src={professional.src}
            alt={professional.name}
          />
        </div>
      </div>
      <div className='professional-wrapper'>
      <div className='name'>{professional.name}</div>
      <div className='fuel'> {professional.category}</div>
      <div className='people'>{professional.description}</div>
      <div className='description'>zakres opłaty: {professional.payment}</div>
      <div className='email'>
      <FaMailBulk/> <a href={`mailto:${professional.email}`}>{professional.email}</a>
      </div>
      <div className='facebook'>
      <FaFacebook/> <a href={professional.facebook} target='_blank'>{professional.facebook}</a>
      </div>
      <div className='phone'>
      <FaPhoneAlt/> <a href={`tel:${professional.phone}`}>{professional.phone}</a>
      </div>
      </div>
    </div>
  )
}

export default ProfessionalsEdit
