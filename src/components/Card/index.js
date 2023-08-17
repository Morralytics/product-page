import React, { useState, useEffect } from 'react';
import SupportCard from '../SupportCard';

import './style.css';

const Card = () => {

  const [cards, setCards] = useState([]);

  // I am using state to save the fetched data into state
  // I am using the useEffect hook here with an empty dependency ( , [] ) so that it will only render once on DOM load
  // On DOM load the component will fetch the data from the json file, resolve the resolve promise by turning it into json data, and then setting that data to our state
  useEffect(() => {
    fetch('/data/image.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, []);
  console.log(cards)
  // This is now rendering each card as their own SupportCard child that will be rendered into this parent component
  // Next I need to render a single card that can change when the child element is hovered (not sure if that is possible)
  const card = cards.map((card, i) => {
    return <SupportCard key={i} keyId={i} card={card}/>
  });

  return (
    <div>
      {/* Bug/ Trying to render before it is mounted which is why the image shows up after a change but not on page reload */}
      <div><img src={cards[0].img} alt='main-card' id='main-card'/></div>
      <ul id='image-collection'>
        {card}
      </ul>
    </div>
  )
};

export default Card;
