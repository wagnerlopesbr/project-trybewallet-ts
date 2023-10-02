type PropsType = {
  labelName: string;
  inputName: string;
  inputId: string;
  formValue: string;
  options: string[];
  changeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select(props: PropsType) {
  const {
    labelName,
    inputName,
    inputId,
    formValue,
    changeHandler,
    options,
  } = props;
  return (
    <div>
      <label htmlFor={ inputId }>{labelName}</label>
      <select
        name={ inputName }
        id={ inputId }
        value={ formValue }
        onChange={ changeHandler }
        data-testid={ inputId }
      >
        {
          options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;
