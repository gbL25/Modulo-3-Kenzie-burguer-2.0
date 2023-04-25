import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerFormSchema } from './registerFormSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';

export interface IRegisterFormData {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  })

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    userRegister(formData)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id='name' label='Nome' type='text' error={errors.name} register={register('name')} />

      <Input id='email' label='Email' type='email' error={errors.email} register={register('email')} />

      <Input id='passwors' label='Senha' type='password' error={errors.password} register={register('password')} />

      <Input id='confirmPassword' label='Confirmar Senha' error={errors.confirmPassword} type='password' register={register('confirmPassword')} />

      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;
