import React from 'react';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

const ItemIcon = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  border: 2px solid #ffadd2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.3s;
  color: #eb2f96;
  font-weight: bold;
  background-color: #fff0f6;

  &:hover {
    background-color: #ffadd2;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function ItemSelector() {
  return (
    <SelectorContainer>
      <ItemIcon>
        Hair
      </ItemIcon>
      <ItemIcon>
        Dress
      </ItemIcon>
      <ItemIcon>
        Top
      </ItemIcon>
      <ItemIcon>
        Bottom
      </ItemIcon>
      <ItemIcon>
        Jacket
      </ItemIcon>
      <ItemIcon>
        Shoes
      </ItemIcon>
      <ItemIcon>
        Accessories
      </ItemIcon>
    </SelectorContainer>
  )
}
