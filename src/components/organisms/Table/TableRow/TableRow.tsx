import { useState } from 'react';

import HoverTooltip, {
  ITooltipConfig,
  TooltipPositionEnum,
} from 'components/atoms/HoverTooltip/HoverTooltip';
import IconButton, { IconsType } from 'components/atoms/IconButton/IconButton';
import { IFormatedData } from 'utils/apiHandlers/books';

import styles from '../Table.module.scss';

interface ITableRowProps extends IFormatedData {
  columnsCount: number;
  lp: number;
  handlerDelete: (id: string) => void;
  handlerEdit: () => void;
}

const TableRow: React.FC<ITableRowProps> = ({
  mainData,
  otherData,
  id,
  handlerEdit,
  handlerDelete,
  columnsCount,
  lp,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rowCssClasses = `${styles.table__Row} ${styles.table__RowBody} ${
    styles[`table__Row${columnsCount}`]
  }`;

  const editConfig: ITooltipConfig = {
    text: 'Edytuj',
    position: TooltipPositionEnum.LEFT,
    withArrow: true,
  };
  const deleteConfig: ITooltipConfig = {
    text: 'Usuń',
    position: TooltipPositionEnum.LEFT,
    withArrow: true,
  };

  return (
    <div className={rowCssClasses}>
      <div className={styles.table__Cell} key={lp}>
        {lp}
      </div>
      {Object.values(mainData).map((cell) => (
        <div className={styles.table__Cell} key={cell}>
          {cell}
        </div>
      ))}

      <div
        className={`${styles.table__Cell} ${styles.table__CellButtons}`}
        key="buttons"
      >
        <HoverTooltip config={editConfig}>
          <IconButton clickHandler={handlerEdit} iconType={IconsType.EDIT} />
        </HoverTooltip>
        <HoverTooltip config={deleteConfig}>
          <IconButton
            clickHandler={() => handlerDelete(id)}
            iconType={IconsType.DELETE}
          />
        </HoverTooltip>
      </div>
    </div>
  );
};

export default TableRow;
