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
`;

const items = [
  'hair',
  'dress',
  'top',
  'bottom',
  'jacket',
];

export default function ItemSelector() {
  return (
    <div>
      {items.map((item, index) => (
        <ItemIcon key={index}>
          {item}
        </ItemIcon>
      ))}
    </div>
  )
}