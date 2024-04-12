import React from 'react';
import styled from 'styled-components';
import DefaultFigure from '../assets/figure/figure.png';

const FigureBlock = styled.div`
  display: contents;

  img {
    height: 99vh;
    position: absolute;
  }
`;

export default function Figure({ selectedItem, selectedSubItem }) {
  return (
    <FigureBlock>
      <img src={DefaultFigure} alt="Default figure" />
      {selectedItem && <img src={selectedItem.full} alt='Selected item' />}
      {selectedSubItem && <img src={selectedSubItem.full} alt='Selected sub item' />}
    </FigureBlock>
  )
}
