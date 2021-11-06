import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './FormInput.module.scss';

interface IFormInputProps {
  labelText: string;
  name: string;
  type?: string;
  formRegister: UseFormRegister<FieldValues>;
  errorMsg?: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  labelText,
  name,
  type = 'text',
  formRegister,
  errorMsg,
}) => (
  <div className={styles.formInput__Wrapper}>
    <input
      className={styles.fomrInput__Input}
      {...formRegister(name)}
      id={name}
      type={type}
    />
    <label className={styles.formInput__Label} htmlFor={name}>
      {labelText}
    </label>
    <span className={styles.formInput__Error}>{errorMsg}</span>
  </div>
);

export default FormInput;
