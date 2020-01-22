import React, { useState } from 'react';
import "./index.css";
import { addIndex } from './utils/helpers.js'
import DragItem from "./components/DragItem/DragItem";
import DropItem from "./components/DropItem/DropItem";
import ReactDom from 'react-dom';
import staticJSON from '../resources/json/cat-data.json';


function App() {
  const [cardValues, setCardValue] = useState(addIndex(staticJSON));

  return (
    <div className="container">
      <div className="container-column">
        <DropItem
          heading="Slinky Cats"
          onDrop={id => {
            const currentCard = { ...cardValues[id] };
            currentCard.position = 0;
            setCardValue({ ...cardValues, ...{ [id]: currentCard } });
          }}
        >
          {Object.keys(cardValues)
            .map(key => ({ id: key, ...cardValues[key] }))
            .filter(card => card.position <= 1)
            .map(card => <DragItem key={card.id} id={card.id} data={card}  />)}
        </DropItem>
        <DropItem
          heading="Jedi Cats"
          onDrop={id => {
            const currentCard = { ...cardValues[id] };
            currentCard.position = 2;
            setCardValue({ ...cardValues, ...{ [id]: currentCard } });
          }}
        >
          {Object.keys(cardValues)
            .map(key => ({ id: key, ...cardValues[key] }))
            .filter(card => card.position > 1 && card.position <= 3)
            .map(card => <DragItem id={card.id} data={card} key={card.id} />)}
        </DropItem>
        <DropItem
          heading="Fancy Cats"
          onDrop={id => {
            const currentCard = { ...cardValues[id] };
            currentCard.position = 4;
            setCardValue({ ...cardValues, ...{ [id]: currentCard } })
          }}
        >
          {Object.keys(cardValues)
            .map(key => ({ id: key, ...cardValues[key] }))
            .filter(card => card.position >= 4)
            .map(card => <DragItem id={card.id} data={card} key={card.id} />)}
        </DropItem>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);