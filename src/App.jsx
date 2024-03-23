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

  const handleSelectItemImage = (itemType, subType, image) => {
    setSelectedItems(prevItems => {
      const currentTypeItems = prevItems[itemType] || {};
      if (currentTypeItems[subType] === image) {
        const updatedSubItems = { ...currentTypeItems };
        delete updatedSubItems[subType];
        return { ...prevItems, [itemType]: updatedSubItems };
      } else {
        const updatedSubItems = { ...currentTypeItems, [subType]: image };
        if (itemType === 'dresses') {
          return { dresses: { default: image } };
        } else if ((itemType === 'tops' || itemType === 'bottoms') && prevItems.dresses) {
          const updatedItems = { ...prevItems };
          delete updatedItems.dresses;
          return { ...updatedItems, [itemType]: { default: image } };
        } else {
          return { ...prevItems, [itemType]: updatedSubItems };
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
          onSelectItemImage={(subType, image) => handleSelectItemImage(selectedType, subType, image)}
        />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
