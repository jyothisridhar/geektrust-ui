import React from 'react';

function Vehicles(props) {
  const name = `v-group${props.num}`;
  const style= {
    justifySelf: 'center'
  };

  return (
    <div style={style}>
      <div>
        <input type="radio" name={name} value="spacepod" id="pod" />
        <label htmlFor="pod">Space Pod</label>
      </div>
      <div>
        <input type="radio" name={name} value="spacerocket" id="rocket"/>
        <label htmlFor="rocket">Space Rocket</label>
      </div>
      <div>
        <input type="radio" name={name} value="spaceshuttle" id="shuttle"/>
        <label htmlFor="shuttle">Space Shuttle</label>
      </div>
      <div>
        <input type="radio" name={name} value="spaceship" id="ship"/>
        <label htmlFor="pod">Space Ship</label>
      </div>
    </div>
  )
}

export default Vehicles;
