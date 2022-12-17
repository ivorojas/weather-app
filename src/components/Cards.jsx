import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          temp={c.temp}
          onClose={() => onClose(c.id)}
        /> )}

    </div>
  );
}
