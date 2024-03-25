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

      // The issue seems to be in identifying the toggle-off condition correctly.
      // Adjust the condition to explicitly check if the sub-item is already selected.
      if (currentTypeItems[subType] && currentTypeItems[subType] === image) {
        const updatedSubItems = { ...currentTypeItems };
        delete updatedSubItems[subType];

        // If no sub-items remain in the category, remove the category altogether.
        if (Object.keys(updatedSubItems).length === 0) {
          const { [itemType]: _, ...restItems } = prevItems;
          return restItems;
        }

        return { ...prevItems, [itemType]: updatedSubItems };
      } else {
        // Selecting an item: Add or update the item in its category.
        const updatedSubItems = { ...currentTypeItems, [subType]: image };

        // Handle special cases for dresses affecting tops and bottoms.
        if (itemType === 'dresses') {
          const { tops: _, bottoms: __, ...rest } = prevItems;
          return { ...rest, [itemType]: { default: image } };
        } else {
          // Handle selecting tops/bottoms when a dress is selected.
          if ((itemType === 'tops' || itemType === 'bottoms') && prevItems.dresses) {
            const { dresses: _, ...rest } = prevItems;
            return { ...rest, [itemType]: updatedSubItems };
          } else {
            // Regular item selection.
            return { ...prevItems, [itemType]: updatedSubItems };
          }
        }
      }
    });
  };

  const handleSelectSubItemImage = (subType, image) => {
    // Check if the item is currently selected and should be toggled off
    const currentlySelected = selectedItems[selectedType]?.[subType] === image;
  
    if (currentlySelected) {
      // Deselect the item
      setSelectedItems(prevItems => {
        const updatedCategoryItems = { ...prevItems[selectedType] };
        delete updatedCategoryItems[subType]; // Remove the sub-item
  
        // Check if there are no more sub-items selected in this category
        if (Object.keys(updatedCategoryItems).length === 0) {
          // If empty, remove the entire category
          const { [selectedType]: _, ...restItems } = prevItems;
          return restItems;
        }
  
        // Otherwise, just update the category with the remaining selected sub-items
        return { ...prevItems, [selectedType]: updatedCategoryItems };
      });
    } else {
      // If not currently selected, proceed to select the item as normal
      handleSelectItemImage(selectedType, subType, image);
    }
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
          onSelectItemImage={(subType, image) => handleSelectSubItemImage(subType, image)}
        />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
