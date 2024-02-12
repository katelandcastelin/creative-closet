import React from 'react';
import styled from 'styled-components';
import ItemChild from './ItemChild';

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

const hair = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];

const dresses = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];

const top = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
];

export default function SelectedItemList() {
  return (
    <>
      <ItemChild />
      <ListContainer>
        {dresses.map((dress, index) => (
          <ItemBlock key={index}>
            {dress}
          </ItemBlock>
        ))}
      </ListContainer>
    </>
  )
}