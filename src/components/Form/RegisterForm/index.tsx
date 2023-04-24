import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TRegisterFormValues, registerFormSchema } from './registerFormSchema';
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
      {/* {errors.name ? <p>{errors.name.message}</p> : null} */}
      <Input id='email' label='Email' type='email' error={errors.email} register={register('email')} />
      {/* {errors.email ? <p>{errors.email.message}</p> : null} */}
      <Input id='passwors' label='Senha' type='password' error={errors.password} register={register('password')} />
      {/* {errors.password ? <p>{errors.password.message}</p> : null} */}
      <Input id='confirmPassword' label='Confirmar Senha' error={errors.confirmPassword} type='password' register={register('confirmPassword')} />
      {/* {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null} */}
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;
