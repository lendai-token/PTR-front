import './style.scss';
import { useAppSelector } from '../../app/hooks';
import { selectPhone } from './phoneSlice';
import { useAppDispatch } from "../../app/hooks";
import { setIsCompleted } from "../home/homeSlice";

const InputItems = (props: any) => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector(selectPhone);
  const handleChange = (e: any) => {
    props.onPhoneChange(e.target.value);
    if (e.target.value === "") {
      dispatch(setIsCompleted(false));
    } else {
      dispatch(setIsCompleted(true));
    }
  };

  return (
    <div className="container">
      <div tabIndex={0} className="input_container">
        <input
          className="input"
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handleChange}
          onFocus={() => {
          }}
        />
      </div>
    </div>
  );
};

export default InputItems;
