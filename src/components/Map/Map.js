import React from 'react';
import GoogleMapReact from 'google-map-react';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
       
      >
       
      </GoogleMapReact>
    </div>
  );
};

export default Map;
