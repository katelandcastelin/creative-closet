import React from 'react';
import styled from 'styled-components';
import DefaultFigure from '../assets/figure/figure.png';
import Top1 from '../assets/tops/1.png';

const FigureBlock = styled.div`
  background-color: aliceblue;
  display: contents;

  img {
    height: 99vh;
    position: absolute;
  }
`;

export default function Figure() {
  return (
    <FigureBlock>
      <img src={DefaultFigure} />
    </FigureBlock>
  )
}