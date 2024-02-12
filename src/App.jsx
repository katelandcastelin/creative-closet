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
  return (
    <AppContainer>
      <Room />
      <SelectorContainer>
        <ItemSelector />
        <SelectedItemList />
      </SelectorContainer>
    </AppContainer>
  )
}

export default App
