export default function Button({ name, handlerButtonClick }) {
  return (
    <button name={name} onClick={handlerButtonClick}>
      {name}
    </button>
  );
}
