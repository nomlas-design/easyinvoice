import { darken, readableColor, getLuminance, lighten } from 'polished';

const generateBackground = (colour: string = '#ffffff') => {
  if (colour === '#ffffff') {
    return colour;
  } else {
    const darkerColour = darken(0.15, colour);
    return `linear-gradient(125deg, ${colour} 0%, ${darkerColour} 100%)`;
  }
};

const generateTextBackgroundColour = (colour: string = '#ffffff') => {
  return readableColor(colour);
};

const generateTextColour = (colour: string = '#0c0c0c') => {
  return getLuminance(colour) > 0.5 ? '#000000' : colour;
};

const generateLighterColour = (colour: string = '#ffffff') => {
  return lighten(0.15, colour);
};

export {
  generateBackground,
  generateTextBackgroundColour,
  generateTextColour,
  generateLighterColour,
};
