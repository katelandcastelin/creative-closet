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
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItemImage = (itemType, image) => {
    setSelectedItems(prevItems => {
      if (prevItems[itemType] === image) {
        const updatedItems = { ...prevItems };
        delete updatedItems[itemType];
        return updatedItems;
      } else {
        if (itemType === 'dresses') {
          return { dresses: image };
        } else if ((itemType === 'tops' || itemType === 'bottoms') && prevItems.dresses) {
          return { [itemType]: image };
        } else {
          return { ...prevItems, [itemType]: image };
        }
      }
    });
  };

  return (
    <AppContainer>
      <Room
        selectedItems={selectedItems}
      />
      <SelectorContainer>
        <ItemSelector
          onSelectItemType={setSelectedType} 
        />
        <SelectedItemList
          selectedType={selectedType}
          onSelectItemImage={(image) => handleSelectItemImage(selectedType, image)}
        />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
