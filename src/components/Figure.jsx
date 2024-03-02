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

export default function Figure({ items }) {

  return (
    <FigureBlock>
      <img src={DefaultFigure} alt='Default figure' />
      {Object.values(items).map((item, index) => (
        <img key={index} src={item} alt='Selected item' />
      ))}
    </FigureBlock>
  )
}
