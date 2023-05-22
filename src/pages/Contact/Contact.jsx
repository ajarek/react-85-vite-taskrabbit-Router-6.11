import {useNavigate } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import './Contact.css'

export const Contact = () => { 
  const navigate = useNavigate()
  const onSubmit = (data) => {
    alert('Thank you ' + data.name)
    navigate('/')
  }
  return (
    <div className='contact'>
      <Form onSubmit={onSubmit}/>
    </div>
  )
}

export default Contact
