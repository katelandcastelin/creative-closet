import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  padding: 10px 20px;
  background-color: #aa30cf;
  border-radius: 4px;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(1.05);
  }
`;

export default function Button({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
