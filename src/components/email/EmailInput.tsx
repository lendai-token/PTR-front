import './style.scss';
import { useAppSelector } from '../../app/hooks';
import { selectEmail } from './emailSlice';

const InputItems = (props: any) => {

  const email = useAppSelector(selectEmail);
  const handleChange = (e: any) => {
    props.onEmailChange(e.target.value);
  };

  return (
    <div className="container">
      <div tabIndex={0} className="input_container">
        <input
          className="input"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          onFocus={() => {
          }}
        />
      </div>
    </div>
  );
};

export default InputItems;
