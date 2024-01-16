import React from 'react';
import ModalProps from '../model/ModalProps';
import Avatar from './Avatar';
import '../style/modal.css';

const Modal: React.FC<ModalProps> = ({ items, inputValue, onItemClick }) => (
  <div className="modal">
    {items
      .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
      .map((item) => (
        <div key={item.id} className="item" onClick={() => onItemClick(item)}>
          <Avatar avatarUrl={item.avatar} altText={item.name} />
          <div style={{ marginLeft: "5px" }}>
            <h5> {item.name}</h5>
            <p style={{ color: 'gray' }}>{item.email}</p>
          </div>
        </div>
      ))}
  </div>
);

export default Modal;
