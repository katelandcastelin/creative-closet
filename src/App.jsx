import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Room from './components/Room';
import ItemSelector from './components/ItemSelector';
import SelectedItemList from './components/SelectedItemList';
import SubItemSelector from './components/SubItemSelector';
import SubSelectedItemList from './components/SubSelectedItemList';

const AppContainer = styled.div`
  display: flex;
`;

const SelectorContainer = styled.div`
  display: flex;
`;

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubType, setSelectedSubType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleSelectSubType = (type) => {
    setSelectedSubType(type);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleSelectSubItem = (item) => {
    setSelectedSubItem(item);
  };

  // subOnSelect needs to open SubItemSelector

  return (
    <AppContainer>
      <Room selectedItem={selectedItem} selectedSubItem={selectedSubItem} />
      <SelectorContainer>
        <ItemSelector onSelect={handleSelectType} subOnSelect={handleSelectSubType} />
        <SubItemSelector
          selectedSubType={selectedSubType}
          onSelectSubItem={handleSelectSubType}
        />
        {/* <SubSelectedItemList selectedSubType={selectedSubType} onSelectSubItem={handleSelectSubItem} /> */}
        <SelectedItemList
          selectedType={selectedType} onSelectItem={handleSelectItem}
          onSelectSubItem={handleSelectSubItem}
          selectedSubType={selectedSubType}
        />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
