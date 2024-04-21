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
  const [subCat, setSubCat] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleSelectSubType = (type) => {
    setSelectedSubType(type);
  };

  const subCategoryClick = (type) => {
    setSubCat(type);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleSelectSubItem = (item) => {
    setSelectedSubItem(item);
  };

  return (
    <AppContainer>
      <Room selectedItem={selectedItem} selectedSubItem={selectedSubItem} />
      <SelectorContainer>
        <ItemSelector
          onSelect={handleSelectType}
          subOnSelect={handleSelectSubType}
        />
        <SubItemSelector
          selectedSubType={selectedSubType}
          // onSelectSubType={handleSelectSubType}
          onSelectSubType={subCategoryClick}
        />
        <SelectedItemList
          selectedType={selectedType}
          onSelectItem={handleSelectItem}
          selectedSubType={selectedSubType}
          onSelectSubItem={handleSelectSubItem}
          subCat={subCat}
        />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
