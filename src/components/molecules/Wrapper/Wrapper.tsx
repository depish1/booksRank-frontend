import React from 'react';

import styles from './Wrapper.module.scss';

interface IWrapperProps {
  additionalCssClass?: string;
}

const Wrapper: React.FC<IWrapperProps> = ({
  children,
  additionalCssClass = null,
}) => (
  <div className={`${styles.wrapper} ${additionalCssClass}`}>{children}</div>
);

export default Wrapper;
