import React from 'react';
import styles from '../styles/planets.module.css';
import Vehicles from './Vehicles';

function Destinations(props){
  return (
    <div className={styles.container}>
      <div className={styles.planetSelect}>
        <label htmlFor="planet-select" className={styles.item1}>Destination {props.num}:</label>
        <select name="planets" id="planet-select" className={styles.item2}>
          <option value="">Select a Planet</option>
          <option value="donlon">DonLon</option>
          <option value="enchai">Enchai</option>
          <option value="jebing">Jebing</option>
          <option value="sapir">Sapir</option>
          <option value="lerbin">Lerbin</option>
          <option value="pingasor">Pingasor</option>
        </select>
        <Vehicles num={props.num} />
      </div>
    </div>
  )
}

export default Destinations;
