import React from 'react';
import tank1 from '@/assets/icons/tank1.svg';
import tank2 from '@/assets/icons/tank2.svg';

const icons = {
  tank1,
  tank2
};

const SpriteIcon = ({ name }) => {
  const Icon = icons[name];
  return <Icon />;
};

export default SpriteIcon;
