import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ItemChild from './ItemChild';
import {tops} from '../../backend/tops';
import {dresses} from '../../backend/dresses';

const ListContainer = styled.div`
  height: 99vh;
  width: 150px;
  background-color: aliceblue;
  border-radius: 4px;
  overflow-y: auto;
  color: black;
`;

const ItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  border-bottom: 1px solid #555;
  cursor: pointer;
`;

export default function SelectedItemList({ selectedType }) {
  const [scrollPositions, setScrollPositions] = useState({});
  const listContainerRef = useRef(null);

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

  let items;
  switch (selectedType) {
    case 'hair':
      items = hair;
      break;
    case 'tops':
      items = tops;
      break;
    case 'dresses':
      items = dresses;
      break;
    default:
      items = [];
  }

  return (
    <>
      <ListContainer  ref={listContainerRef} onScroll={handleScroll}>
        {items.map((item, index) => (
          <ItemBlock key={index}>
            {item}
          </ItemBlock>
        ))}
      </ListContainer>
    </>
  )
}
