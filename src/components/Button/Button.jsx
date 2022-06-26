import { ButtonStyled } from './Button.styled';

export default function Button({ name, handlerButtonClick }) {
  return (
    <ButtonStyled name={name} onClick={handlerButtonClick}>
      {name}
    </ButtonStyled>
  );
}
