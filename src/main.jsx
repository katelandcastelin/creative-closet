import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);




// I'm building a dress up game with react. I'm new to writing code so bare with my lingo and minimal understanding. So far I have the 'shell', all the components I want for this game and they are rendered on the screen how I want them. I'm asking you to fill into my code, all the functionality for all my points:
// 1. Clicking on an ItemSelector, e.g. Dresses, will list all 'dresses' inside the SelectedItemList.
// 2. Clicking on an item, e.g. dress1, will display the image on the figure.
// 3. Clicking dress1 again will toggle it off so it is no longer displaying on the figure.
// 4. Clicking an ItemSelector that has sub-items, e.g. accessories which has hats, earrings, etc. Will display those sub item titles in the SubItemSelector icons. (This is where it gets tricky so bare with me while I explain a lot). In this case, clicking on Accessories should open the hats in SelectedItemList because that is just how I'm laying out this game. Shoes will open on shoes and then socks will be a sub item icon.
// 5. Sub items must also toggle on and off when asked to. This toggling on and off must not interfere with the 'main' items' toggling. EVERYTHING must ALWAYS toggle on and off.
// Here is my 'shell' code for you: 
// import { useState } from 'react';
// import './App.css';
// import styled from 'styled-components';
// import Room from './components/Room';
// import ItemSelector from './components/ItemSelector';
// import SelectedItemList from './components/SelectedItemList';

// const AppContainer = styled.div`
//   display: flex;
// `;

// const SelectorContainer = styled.div`
//   display: flex;
// `;

// function App() {
//   return (
//     <AppContainer>
//       <Room />
//       <SelectorContainer>
//         <ItemSelector />
//         <SelectedItemList />
//       </SelectorContainer>
//     </AppContainer>
//   )
// }

// export default App
// import React from 'react';
// import styled from 'styled-components';
// import Figure from './Figure';

// const RoomContainer = styled.div`
//   height: 99vh;
//   width: 50vw;
//   border: 1px solid white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: aliceblue;
// `;

// export default function Room() {
//   return (
//     <RoomContainer>
//       <Figure />
//     </RoomContainer>
//   )
// }
// import React from 'react';
// import styled from 'styled-components';
// import DefaultFigure from '../assets/figure/figure.png';

// const FigureBlock = styled.div`
//   display: contents;

//   img {
//     height: 99vh;
//     position: absolute;
//   }
// `;

// export default function Figure() {
//   return (
//     <FigureBlock>
//       <img src={DefaultFigure} alt="Default figure" />
//     </FigureBlock>
//   )
// }
// import React from 'react';
// import styled from 'styled-components';

// const SelectorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-radius: 10px;
// `;

// const ItemIcon = styled.div`
//   height: 65px;
//   width: 65px;
//   border-radius: 100%;
//   border: 2px solid #ffadd2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
//   cursor: pointer;
//   transition: transform 0.1s ease, background-color 0.3s;
//   color: #eb2f96;
//   font-weight: bold;
//   background-color: #fff0f6;

//   &:hover {
//     background-color: #ffadd2;
//     color: white;
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// export default function ItemSelector() {
//   return (
//     <SelectorContainer>
//       <ItemIcon>
//         Hair
//       </ItemIcon>
//       <ItemIcon>
//         Dress
//       </ItemIcon>
//       <ItemIcon>
//         Top
//       </ItemIcon>
//       <ItemIcon>
//         Bottom
//       </ItemIcon>
//       <ItemIcon>
//         Jacket
//       </ItemIcon>
//       <ItemIcon>
//         Shoes
//       </ItemIcon>
//       <ItemIcon>
//         Accessories
//       </ItemIcon>
//     </SelectorContainer>
//   )
// }
// import React from 'react';
// import styled from 'styled-components';
// import SubItemSelector from './SubItemSelector';

// const ListContainer = styled.div`
//   height: 97vh;
//   width: 200px;
//   background: linear-gradient(to bottom, #fdfbfb, #ebedee);
//   border-radius: 10px;
//   overflow-y: auto;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 10px;
// `;

// const ItemBlock = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   margin: 10px;
//   cursor: pointer;
//   border-radius: 8px;
//   transition: transform 0.2s, box-shadow 0.2s;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }

//   img {
//     max-height: 100%;
//     max-width: 100%;
//     border-radius: 8px;
//   }
// `;

// export default function SelectedItemList() {
//   return (
//     <>
//       <SubItemSelector />
//       <ListContainer>
//         <ItemBlock>
//         </ItemBlock>
//       </ListContainer>
//     </>
//   )
// }
// import React from 'react';
// import styled from 'styled-components';

// const SubIconContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px;
// `;

// const SubItemIcon = styled.div`
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   margin: 5px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   background-color: #ebedee;
//   color: #333;
//   border: 1px solid #ddd;
// `;

// export default function SubItemSelector() {
//   return (
//     <SubIconContainer>
//       <SubItemIcon>
//       </SubItemIcon>
//     </SubIconContainer>
//   );
// }
// Examples of my data in my backend folder:
// import Dress1Full from '../src/assets/dresses/full/1.png';
// import Dress1Icon from '../src/assets/dresses/icon/1.png';

// export const dresses = [
//   {
//     full: Dress1Full,
//     icon: Dress1Icon,
//   },
// ];
// import Necklace1Full from '../src/assets/accessories/necklaces/full/1.png';
// import Necklace1Icon from '../src/assets/accessories/necklaces/icon/1.png';

// export const necklaces = [
//   {
//     full: Necklace1Full,
//     icon: Necklace1Icon,
//   },
// ];
