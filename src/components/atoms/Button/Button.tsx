import { MouseEvent } from 'react';

import styles from './Button.module.scss';

export enum ButtonTypeCss {
  'PRIMARY' = 'primary',
  'ADD' = 'add',
  'DELETE' = 'delete',
  'LINK' = 'link',
}

interface IButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;

  text: string;
  handlerClick?: (e: MouseEvent) => void;
  additionalCssClassModificator?: string;
}

const Button: React.FC<IButtonProps> = ({
  text,
  type,
  handlerClick,
  additionalCssClassModificator,
}) => (
  <button
    className={`${styles.button}  ${
      additionalCssClassModificator
        ? styles[`button--${additionalCssClassModificator}`]
        : null
    }`}
    onClick={handlerClick}
    type={type}
  >
    {text}
  </button>
);

export default Button;
