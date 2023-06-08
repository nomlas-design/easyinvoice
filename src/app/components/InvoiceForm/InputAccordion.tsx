import { useEffect, useState } from 'react';
import styles from './styles/sidebar.module.scss';
import { CSSTransition } from 'react-transition-group';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import ChevronDown from './images/chevron-down.svg';

interface Props {
  children: React.ReactNode;
  name: string;
  id: string;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

interface AccordionItemProps {
  header: string;
  [x: string]: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
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

const InputAccordion = ({ children, name, id, expanded, onChange }: Props) => {
  return (
    <AccordionItem
      header={name}
      {...(expanded ? { initialEntered: true } : {})}
    >
      {children}
    </AccordionItem>
  );
};

export default InputAccordion;
