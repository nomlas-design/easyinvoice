import { useEffect, useState } from 'react';
import styles from './styles/sidebar.module.scss';

interface Props {
  children: React.ReactNode;
  name: string;
  id: string;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const InputAccordion = ({ children, name, id, expanded, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(expanded);
  const [isVisible, setIsVisible] = useState(expanded);

  const toggleAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
      // When closing, delay setting isVisible to false until transition is complete
      setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(true);
      // When opening, set isVisible to true immediately and setOpen after transition
      setTimeout(() => setIsOpen(true), 200);
    }
    onChange({}, !isOpen);
  };

  useEffect(() => {
    if (expanded) {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 200);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 200);
    }
  }, [expanded]);

  const contentClass = isOpen
    ? `${styles.accordion__content} ${styles.accordion__content_open}`
    : styles.accordion__content;

  const iconClass = isOpen
    ? `${styles.accordion__icon} ${styles.accordion__icon_open}`
    : styles.accordion__icon;

  return (
    <div className={styles.accordion}>
      <h3 className={styles.accordion__title}>
        <button
          id={id}
          aria-expanded={isOpen}
          aria-controls='accordion-panel-1'
          onClick={toggleAccordion}
        >
          {name}
          <div className={iconClass} />
        </button>
      </h3>
      <div
        className={contentClass}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default InputAccordion;
