import React from 'react';
import ChipProps from '../model/ChipProps';
import '../style/chip.css';
import Avatar from './Avatar';

const Chip: React.FC<ChipProps> = ({ item, onRemove, highlightedItem }) => {

  return (
    <div className={highlightedItem?.id === item.id ? "chip highlighted" : "chip"}>
      <Avatar avatarUrl={item.avatar} altText={item.name} />
      <span className="chip-label">{item.name}</span>
      <button className="remove-icon" onClick={onRemove}>X</button>
    </div>
  );
};

export default Chip;
