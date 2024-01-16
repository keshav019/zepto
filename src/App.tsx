// App.tsx

import React, { useState, KeyboardEvent } from 'react';
import './App.css';
import Chip from './components/Chip';
import Modal from './components/Modal';
import InputBox from './components/InputBox';
import ChipData from './model/ChipData';



const App: React.FC = () => {
  const [items, setItems] = useState<ChipData[]>([
    { id: 1, name: 'Apple', email: "apple@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567180' },
    { id: 2, name: 'Banana', email: "banana@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567181' },
    { id: 3, name: 'Cherry', email: "cherry@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567182' },
    { id: 4, name: 'Date', email: "date@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567183' },
    { id: 5, name: 'Elderberry', email: "elderberry@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567184' },
    { id: 6, name: 'Fig', email: "fig@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567185' },
    { id: 7, name: 'Grapes', email: "grapes@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567186' },
    { id: 8, name: 'Honeydew', email: "honeydew@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567187' },
    { id: 9, name: 'Kiwi', email: "kiwi@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567188' },
    { id: 10, name: 'Lemon', email: "lemon@gmail.com", avatar: 'https://avatars.githubusercontent.com/u/6567189' },
  ]);

  const [inputValue, setInputValue] = useState<string>('');
  const [chips, setChips] = useState<ChipData[]>([]);
  const [highlightedItem, setHighlightedItem] = useState<ChipData | null>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setHighlightedItem(null);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && inputValue === '' && chips.length > 0) {
      if (highlightedItem) {
        const lastChip = chips[chips.length - 1];
        removeChip(lastChip);
        setHighlightedItem(null);
      } else {
        setHighlightedItem(chips[chips.length - 1]);
      }
    }
  };

  const handleItemClick = (item: ChipData) => {
    setChips((prevChips) => [...prevChips, item]);
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    setInputValue('');
    toggleModal();
    setHighlightedItem(null);
  };

  const removeChip = (item: ChipData) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== item.id));
    setItems((prevItems) => [...prevItems, item]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <div className="input-container">
        {chips.map((chip) => (
          <Chip key={chip.id} item={chip} onRemove={() => removeChip(chip)} highlightedItem={highlightedItem} />
        ))}
        <InputBox
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onClick={toggleModal}
        >
          {showModal && <Modal items={items} inputValue={inputValue} onItemClick={handleItemClick} />}
        </InputBox>
      </div>
    </div>
  );
};

export default App;
