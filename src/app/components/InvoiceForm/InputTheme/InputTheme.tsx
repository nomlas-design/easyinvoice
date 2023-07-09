import { useEffect, useState } from 'react';
import ColourPicker from './ColourPicker/ColourPicker';
import ImageUpload from './ImageUpload';
import useInputStore from '@/app/stores/inputStore';
import {
  generateBackground,
  generateLighterColour,
  generateTextBackgroundColour,
  generateTextColour,
} from '@/app/lib/configureColours';

const InputTheme = () => {
  const colour = useInputStore((state) => state.colour);
  const setColour = useInputStore((state) => state.setColour);
  const setBackgroundTextColour = useInputStore(
    (state) => state.setBackgroundTextColour
  );
  const setTextColour = useInputStore((state) => state.setTextColour);
  const setLighterColour = useInputStore((state) => state.setLighterColour);

  useEffect(() => {
    const newBackgroundColour = generateTextBackgroundColour(colour);
    const newTextColour = generateTextColour(colour);
    const newLighterColour = generateLighterColour(colour);
    setTextColour(newTextColour);
    setBackgroundTextColour(newBackgroundColour);
    setLighterColour(newLighterColour);
  }, [colour, setBackgroundTextColour, setLighterColour, setTextColour]);

  return (
    <>
      <ColourPicker
        colour={colour}
        onChange={(colour) => {
          setColour(colour);
        }}
      />
      <ImageUpload />
    </>
  );
};

export default InputTheme;
