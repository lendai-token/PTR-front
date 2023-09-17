import "./style.scss"
const RadioButton = (props: any) => {
    const { changed, id, isSelected, label, value } = props;
    return (
      <div className="radio-button">
        <input
          id={id}
          onChange={changed}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <label className="radio-label" htmlFor={id}>
            <p className="radio-paragraph">{label}</p>
        </label>
      </div>
    );
};

export default RadioButton;
  