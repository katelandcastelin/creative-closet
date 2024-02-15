import { useState } from 'react';
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
  const [selectedType, setSelectedType] = useState();
  const [selectedItemImage, setSelectedItemImage] = useState();

  return (
    <AppContainer>
      <Room selectedItemImage={selectedItemImage} />
      <SelectorContainer>
        <ItemSelector onSelectItemType={setSelectedType} />
        <SelectedItemList selectedType={selectedType} onSelectItemImage={setSelectedItemImage} />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
