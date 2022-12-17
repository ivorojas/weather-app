import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id, temp}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">

          <h5 className="card-title">{name}</h5>

          <div className="card_container">
          <div className="temp_content">
            <h4>{Math.ceil(temp - 273.15)}°</h4>
          </div>

          {/*---------------------------------------------- */}
          <div className='max_min_content' >
              <div className='min' >
                <p>{Math.floor(min - 273.15)}°/</p>
              </div>
              <div  >
                <p>{Math.floor(max - 273.15)}°</p>
              </div>
          </div>
  

          <div >
            <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
        </div>
      </div>
    );
};
