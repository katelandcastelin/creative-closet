import React from 'react';
import styled from 'styled-components';
import SubSelectedItemList from './SubSelectedItemList';

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

export default function SubItemSelector({ items }) {
  return (
    <SubIconContainer>
      {Object.entries(items).map(([category, subItems]) => (
        <div key={category}>
          {subItems.map((item, index) => (
            <SubItemIcon key={index}>
              {category}
              <SubSelectedItemList />
            </SubItemIcon>
          ))}
        </div>
      ))}
    </SubIconContainer>
  );
}
