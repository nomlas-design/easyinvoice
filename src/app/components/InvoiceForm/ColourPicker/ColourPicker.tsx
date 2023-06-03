import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import styles from '../styles/form.module.scss';
import useClickOutside from './useClickOutside';

interface ColourPickerProps {
  colour: string;
  onChange: (color: string) => void;
}

export default function ColourPicker({ colour, onChange }: ColourPickerProps) {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState<boolean>(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside({ ref: popover, handler: close });

  return (
    <div className={styles.colourpicker}>
      Choose a colour theme:
      <div
        className={styles.colourpicker__swatch}
        style={{ backgroundColor: colour }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div className={styles.colourpicker__popover} ref={popover}>
          <HexColorPicker color={colour} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
