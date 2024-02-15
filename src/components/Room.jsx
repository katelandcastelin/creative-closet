import React from 'react';
import styled from 'styled-components';
import Figure from './Figure';

const RoomContainer = styled.div`
  height: 99vh;
  width: 50vw;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export default function Room({ selectedItemImage }) {

  return (
    <RoomContainer>
      <Figure image={selectedItemImage} />
    </RoomContainer>
  )
}
