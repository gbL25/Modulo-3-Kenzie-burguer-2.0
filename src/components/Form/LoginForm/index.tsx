import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input/index';
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserContext } from '../../../providers/UserContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './loginFormSchema';

export interface ILoginFormData {
  email: string,
  password: string
}

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema)
  })

  const submit: SubmitHandler<ILoginFormData> = (FormData) => {
    userLogin(FormData)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id='email' label='Email' type='email' error={errors.email} register={register('email')} />
      <Input id='passwors' label='Senha' type='password' error={errors.password} register={register('password')} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;
