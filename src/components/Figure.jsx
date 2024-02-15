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

const FigureImage = styled.img`
  height: 99vh;
  position: absolute;
`;

const ItemImage = styled.img`
  height: auto;
  position: absolute;
`;

export default function Figure({ image }) {

  return (
    <FigureBlock>
      {/* <img src={image || DefaultFigure} /> */}
      <FigureImage src={DefaultFigure} alt="Default figure" />
      {image && <ItemImage src={image} alt="Selected item" />}
    </FigureBlock>
  )
}
