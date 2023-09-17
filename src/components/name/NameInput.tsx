import './style.scss';
import { useAppSelector } from '../../app/hooks';
import { selectFullName } from './nameSlice';

const InputItems = (props: any) => {
  const fullName = useAppSelector(selectFullName);
  const handleChange = (e: any) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className="container">
      <div tabIndex={0} className="input_container">
        <input
          className="input"
          type="text"
          placeholder="Enter your first name and last name"
          value={fullName}
          onChange={handleChange}
          onFocus={() => {
          }}
        />
      </div>
    </div>
  );
};

export default InputItems;
