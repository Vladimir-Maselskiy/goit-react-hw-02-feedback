import Button from 'components/Button/Button';
import { capitalizeName } from 'utils/capitalizeName';

export default function FeedbackOptions({ options, onClick }) {
  const keysOriginalCase = Object.keys(options);
  const keys = keysOriginalCase.map(key => capitalizeName(key));
  return (
    <>
      <ul>
        {keys.map(key => (
          <li key={key}>
            <Button name={key} handlerButtonClick={onClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
