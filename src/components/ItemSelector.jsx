import React from 'react';
import styled from 'styled-components';

const ItemIcon = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export default function ItemSelector({ onSelectItemType }) {
  return (
    <div>
      <ItemIcon>
        Hair
      </ItemIcon>
      <ItemIcon onClick={() => onSelectItemType('dresses')}>
        Dress
      </ItemIcon>
      <ItemIcon onClick={() => onSelectItemType('tops')}>
        Top
      </ItemIcon>
      <ItemIcon onClick={() => onSelectItemType('bottoms')}>
        Bottom
      </ItemIcon>
      <ItemIcon>
        Jacket
      </ItemIcon>
    </div>
  )
}
