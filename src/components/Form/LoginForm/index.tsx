import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input/index';
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserContext } from '../../../providers/UserContext';

export interface ILoginFormData {
  email: string,
  password: string
}

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>()

  const submit: SubmitHandler<ILoginFormData> = (FormData) => {
    userLogin(FormData)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id='email' label='Email' type='email' error={errors.email} register={register('email')} />
      {/* {errors.email ? <p>{errors.email.message}</p> : null} */}
      <Input id='passwors' label='Senha' type='password' error={errors.password} register={register('password')} />
      {/* {errors.password ? <p>{errors.password.message}</p> : null} */}
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;
