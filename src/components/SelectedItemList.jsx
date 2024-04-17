import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SubItemSelector from './SubItemSelector';
import { items, subItems } from '../../backend/items';

const ListContainer = styled.div`
  height: 97vh;
  width: 200px;
  background: linear-gradient(to bottom, #fdfbfb, #ebedee);
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const ItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
`;

const SubItemIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #ebedee;
  color: #333;
  border: 1px solid #ddd;
`;

export default function SelectedItemList({ selectedType, onSelectItem, selectedSubType, onSelectSubItem }) {
  const [scrollPositions, setScrollPositions] = useState({});
  const listContainerRef = useRef(null);
  const displayItems = items[selectedType] || [];

  const handleScroll = () => {
    setScrollPositions({
      ...scrollPositions,
      [selectedType]: listContainerRef.current?.scrollTop,
    });
  };

  useEffect(() => {
    const savedScrollPosition = scrollPositions[selectedType] || 0;
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = savedScrollPosition;
    }
  }, [selectedType, scrollPositions]);

  return (
    <>
      <ListContainer ref={listContainerRef} onScroll={handleScroll}>
        {displayItems.map((item, index) => (
          <ItemBlock key={index} onClick={() => onSelectItem(item)}>
            <img src={item.icon} alt={selectedType} />
          </ItemBlock>
        ))}
      </ListContainer>
    </>
  )
}
