import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
`;

const SubItem = styled.div`
  height: 45px;
  width: 40px;
  border-right: 1px solid black;
  border-radius: 3px;
  background-color: aliceblue;
  margin-bottom: 10px;
  color: black;
  cursor: pointer;
`;

const subItems = [
  'cap',
  'earing',
  'necklace',
  'glasses',
  'gloves',
  'wrist',
  'bag',
];

export default function ItemChild() {
  return (
    <Container>
      {subItems.map((item, index) => (
        <SubItem key={index}>
          {item}
        </SubItem>
      ))}
    </Container>
  )
}