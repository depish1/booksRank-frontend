import { ReactComponent as EmptyIcon } from 'utils/icons/sadIcon.svg';

import styles from './EmptyMsg.module.scss';

const EmptyMsg: React.FC<{ text: string }> = ({ text }) => (
  <div className={styles.empty__Container}>
    <EmptyIcon />
    <p className={styles.empty__Text}>{text}</p>
  </div>
);

export default EmptyMsg;
