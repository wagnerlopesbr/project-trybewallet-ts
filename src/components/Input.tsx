type PropsType = {
  labelName: string;
  inputName: string;
  inputType: string;
  inputId: string;
  formValue: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: PropsType) {
  const { labelName, inputName, inputType, inputId, formValue, changeHandler } = props;
  return (
    <div>
      <label htmlFor={ inputId }>{labelName}</label>
      <input
        name={ inputName }
        type={ inputType }
        id={ inputId }
        value={ formValue }
        onChange={ changeHandler }
        data-testid={ inputId }
      />
    </div>
  );
}

export default Input;
