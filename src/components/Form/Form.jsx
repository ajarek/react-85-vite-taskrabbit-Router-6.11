import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

// eslint-disable-next-line react/prop-types
export const Form = ({onSubmit}) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    category: yup.string().required(),
    desc: yup.string().required(),
    payment: yup.string().required(),
    phone: yup.string().required(),
    facebook: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Imię i Nazwisko...'
        {...register('name')}
      />
      <p>{errors?.name?.message}</p>
      <input
        type='text'
        placeholder='Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <select
        {...register('category')}
        className='select'
      >
        <option value=''>Kategoria</option>
        <option value='Hydraulika'>Hydraulika</option>
        <option value='Montaż TV'>Montaż TV</option>
        <option value='Montaż Mebli'>Montaż Mebli</option>
        <option value='Przeprowadzki'>Przeprowadzki</option>
        <option value='Elektryka'>Elektryka</option>
        <option value='Sprzątanie domu'>Sprzątanie domu</option>
      </select>
      <p>{errors.category?.message}</p>
      
      <input
        type='text'
        placeholder='Opis...'
        {...register('desc')}
      />
      <p>{errors.text?.desc}</p>
      <input
        type='text'
        placeholder='Zakres opłaty np. 100PLN-250PLN'
        {...register('payment')}
      />
      <p>{errors.payment?.message}</p>
      <input
        type='text'
        placeholder='Nr telefonu...'
        {...register('phone')}
      />
      <p>{errors.phone?.message}</p>
      <input
        type='text'
        placeholder='Adres Facebook'
        {...register('facebook')}
      />
      <p>{errors.facebook?.message}</p>


      <input
        type='submit'
        value='SEND MESSAGE'
      />
    </form>
  )
}
