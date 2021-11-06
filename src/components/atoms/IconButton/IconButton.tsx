import { MouseEvent } from 'react';

import { ReactComponent as AddIcon } from 'utils/icons/addIcon.svg';
import { ReactComponent as DeleteIcon } from 'utils/icons/deleteIcon2.svg';
import { ReactComponent as EditIcon } from 'utils/icons/editIcon.svg';

import styles from './IconButton.module.scss';

const Icons = {
  add: <AddIcon />,
  delete: <DeleteIcon />,
  edit: <EditIcon />,
};

export enum IconsType {
  'ADD' = 'add',
  'DELETE' = 'delete',
  'EDIT' = 'edit',
}

interface IIconButtonProps {
  iconType: IconsType;
  clickHandler: (e: MouseEvent) => void;
}

const IconButton: React.FC<IIconButtonProps> = ({ iconType, clickHandler }) => {
  const Icon = Icons[iconType];
  return (
    <button className={styles.iconButton} onClick={clickHandler} type="button">
      {Icon}
    </button>
  );
};

export default IconButton;
