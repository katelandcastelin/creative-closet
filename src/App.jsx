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
      
      // Toggle off logic for the same item being clicked again
      if (currentTypeItems[subType] === image) {
        const updatedSubItems = { ...currentTypeItems };
        delete updatedSubItems[subType];

        if (Object.keys(updatedSubItems).length === 0) {
          const { [itemType]: _, ...restItems } = prevItems;
          return restItems;
        }

        return { ...prevItems, [itemType]: updatedSubItems };
      } else {
        // New selection logic to clear previous selections properly
        // Clear selections from other types if needed according to the game's logic
        // For simplification, let's assume we reset other types, but you can adjust the logic to keep some types if needed
        const newSelection = {
          ...prevItems,
          [itemType]: { ...currentTypeItems, [subType]: image },
        };

        // Example logic for clearing other selections, this might need adjustment based on game rules
        // If selecting a dress, clear tops and bottoms (and any other conflicting types)
        if (itemType === 'dresses') {
          delete newSelection.tops;
          delete newSelection.bottoms;
          // Add more deletions as per game logic
        }
        // If selecting tops or bottoms, clear dresses
        if (itemType === 'tops' || itemType === 'bottoms') {
          delete newSelection.dresses;
        }
        // Similar logic can be added for accessories to ensure everything can toggle on and off correctly

        return newSelection;
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
