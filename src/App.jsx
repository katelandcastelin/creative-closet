import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Room from './components/Room';
import ItemSelector from './components/ItemSelector';
import SelectedItemList from './components/SelectedItemList';

const AppContainer = styled.div`
  display: flex;
`;

const SelectorContainer = styled.div`
  display: flex;
`;

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <AppContainer>
      <Room selectedItem={selectedItem} />
      <SelectorContainer>
        <ItemSelector onSelect={handleSelectType} />
        <SelectedItemList selectedType={selectedType} onSelectItem={handleSelectItem} />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
