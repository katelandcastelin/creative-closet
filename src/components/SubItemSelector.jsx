import React from 'react';
import styled from 'styled-components';
import { subItems } from '../../backend/items';

const SubIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const SubItemIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #ebedee;
  color: #333;
  border: 1px solid #ddd;
`;

const ItemIcon = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 100%;
  border: 2px solid #ffadd2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.3s;
  color: #eb2f96;
  font-weight: bold;
  background-color: #fff0f6;

  &:hover {
    background-color: #ffadd2;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function SubItemSelector({ selectedSubType, onSelectSubType }) {
  const displaySubItems = subItems[selectedSubType] || [];

  return (
    <SubIconContainer>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {displaySubItems.map((item, index) => (
          <SubItemIcon key={index} onClick={() => onSelectSubType(item)}>
            {item.category}
            {console.log('SubItemSelector')}
          </SubItemIcon>
        ))}
      </div>
    </SubIconContainer>
  );
}
