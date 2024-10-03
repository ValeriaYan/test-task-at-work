import { ReactElement, useEffect, useState } from "react"
import './Form.css'
import { SubmitHandler, useForm } from "react-hook-form";
import successIcon from '/img/success.png'
import Popup from "../../../../components/popup/Popup";
import { IUser } from "../../../../types/IUser";

interface Inputs {
  name: string
  username: string
  email: string
  city: string
  phone: string
  company: string
}

interface FormProps {
  user: IUser
  status: string
}

const Form = ({user, status}: FormProps): ReactElement => {
  const [openPopup, setOpenPopup] = useState(false)

  const defaultValues: Inputs = {
    name: '',
    username: '',
    email: '',
    city: '',
    phone: '',
    company: ''
  };

  useEffect(() => {
    if(status === 'resolved' && user) {
      setValue('name', user?.name)
      setValue('username', user?.username)
      setValue('email', user?.email)
      setValue('city', user?.address?.city)
      setValue('phone', user?.phone)
      setValue('company', user?.company?.name)
    }
  }, [status, user])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setOpenPopup(true)
    setTimeout(() => {
      setOpenPopup(false)
    }, 4000)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__field field">
        <label htmlFor="name" className="field__label">Имя</label>
        <input className={`field__input ${errors.name && 'error'}`} {...register("name", { required: 'Обязательное поле' })} type="text" name='name' id='name'/>
        {errors.name && <p className="form__error-msg">{errors.name.message}</p>}
      </div>
      <div className="form__field field">
        <label htmlFor="username" className="field__label">Никнейм</label>
        <input className={`field__input ${errors.username && 'error'}`} {...register("username", { required: 'Обязательное поле' })} type="text" name='username' id='username'/>
        {errors.username && <p className="form__error-msg">{errors.username.message}</p>}
      </div>
      <div className="form__field field">
        <label htmlFor="email" className="field__label">Почта</label>
        <input className={`field__input ${errors.email && 'error'}`} {...register("email", { required: 'Обязательное поле' })} type="email" name='email' id='email'/>
        {errors.email && <p className="form__error-msg">{errors.email.message}</p>}
      </div>
      <div className="form__field field">
        <label htmlFor="city" className="field__label">Город</label>
        <input className={`field__input ${errors.city && 'error'}`} {...register("city", { required: 'Обязательное поле' })} type="text" name='city' id='city'/>
        {errors.city && <p className="form__error-msg">{errors.city.message}</p>}
      </div>
      <div className="form__field field">
        <label htmlFor="phone" className="field__label">Телефон</label>
        <input className={`field__input ${errors.phone && 'error'}`} {...register("phone", { required: 'Обязательное поле' })} type="tel" name='phone' id='phone'/>
        {errors.phone && <p className="form__error-msg">{errors.phone.message}</p>}
      </div>
      <div className="form__field field">
        <label htmlFor="company" className="field__label">Название компании</label>
        <input className={`field__input ${errors.company && 'error'}`} {...register("company", { required: 'Обязательное поле' })} type="text" name='company' id='company'/>
        {errors.company && <p className="form__error-msg">{errors.company.message}</p>}
      </div>
      <button className="form__btn" type="submit">Сохранить</button>
      <Popup title={"Изменения сохранены"} isOpen={openPopup} setIsOpen={setOpenPopup} img={successIcon}/>
    </form>
  )
}

export default Form