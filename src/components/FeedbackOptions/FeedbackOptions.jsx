import Button from 'components/Button/Button';
import { Feedback } from './FeedbackOptions.styled';
import { capitalizeName } from 'utils/capitalizeName';

export default function FeedbackOptions({ options, onClick }) {
  const keysOriginalCase = Object.keys(options);
  const keys = keysOriginalCase.map(key => capitalizeName(key));
  return (
    <Feedback>
      <ul>
        {keys.map(key => (
          <li key={key}>
            <Button name={key} handlerButtonClick={onClick} />
          </li>
        ))}
      </ul>
    </Feedback>
  );
}
