import styles from './styles/sidebar.module.scss';
import { AccordionItem as Item } from '@szhsin/react-accordion';
import ChevronDown from './Images/chevron-down.svg';

interface Props {
  children: React.ReactNode;
  name: string;
  id: string;
  icon: any;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

interface AccordionItemProps {
  header: string;
  icon: any;
  [x: string]: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  icon,
  ...rest
}) => (
  <Item
    {...rest}
    header={
      <>
        <div className={styles.accordion__icon}>{icon}</div>
        {header}
        <ChevronDown className={styles.accordion__chevron} />
      </>
    }
    className={styles.accordion}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.accordion__header} ${
          isEnter && styles['accordion__header--expanded']
        }`,
    }}
    contentProps={{ className: styles.accordion__body }}
    panelProps={{ className: styles.accordion__panel }}
  />
);

const InputAccordion = ({ children, name, icon, id, expanded }: Props) => {
  return (
    <AccordionItem
      itemKey={id}
      header={name}
      icon={icon}
      {...(expanded ? { initialEntered: true } : {})}
    >
      {children}
    </AccordionItem>
  );
};

export default InputAccordion;
