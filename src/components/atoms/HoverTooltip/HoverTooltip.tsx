import styles from './HoverTooltip.module.scss';

export enum TooltipPositionEnum {
  'TOP_CENTER' = 'top-center',
  'TOP_LEFT' = 'top-left',
  'TOP_RIGHT' = 'top-right',
  'LEFT' = 'left',
}

export interface ITooltipConfig {
  text: string;
  withArrow: boolean;
  position: TooltipPositionEnum;
}

const HoverTooltip: React.FC<{ config: ITooltipConfig }> = ({
  children,
  config,
}) => {
  const { text, withArrow, position } = config;

  const getTooltipCssClasses = () => {
    const tooltipCssClassesArr: string[] = [
      styles.tooltip__Tooltip,
      styles[`tooltip__Tooltip--${position}`],
    ];

    if (withArrow) {
      tooltipCssClassesArr.push(styles[`tooltip__Tooltip--${position}-arrow`]);
    }
    return tooltipCssClassesArr.join(' ');
  };
  const getArrowCssClasses = () => {
    const arrowCssClassesArr: string[] = [styles.tooltip__Arrow];
    switch (position) {
      case TooltipPositionEnum.LEFT:
        arrowCssClassesArr.push(styles[`tooltip__Arrow--right`]);
        break;
      case TooltipPositionEnum.TOP_RIGHT:
        arrowCssClassesArr.push(styles[`tooltip__Arrow--bottom-left`]);
        break;
      default:
        break;
    }

    return arrowCssClassesArr.join(' ');
  };

  return (
    <div className={styles.tooltip__Wrapper}>
      {children}
      <div className={getTooltipCssClasses()}>
        <span className={styles.tooltip__Text}>{text}</span>
        {withArrow && <div className={getArrowCssClasses()} />}
      </div>
    </div>
  );
};

export default HoverTooltip;
