import data from '../../assets/data.json'
import './Professionals.css'

const Professionals = () => {
  return (
    <div className='professionals'>
     {data.map((dt) =>{
      return (
        <div key={dt.id} className="card">
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