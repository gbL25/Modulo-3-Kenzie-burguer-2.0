import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';


interface IInputProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>
  error?: FieldError | undefined
  type: 'text' | 'email' | 'password'
}

const Input = ({ id, label, register, error, type }: IInputProps) => {

  return (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} {...register} />
        <label htmlFor={id}>{label}</label>
      </StyledInputContainer>
      <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
    </div>
  )

}

export default Input;
