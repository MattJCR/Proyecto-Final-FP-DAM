import React from 'react';
import scriptLoader from 'react-async-script-loader';

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      // load finished
      if (isScriptLoadSucceed) {
        this.map = new window.google.maps.Map(this.refs.map, {
          center: { lat: 37.1881714, lng: -3.6066699 },
          zoom: 15
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              this.map.setCenter(pos);

              const marker = new window.google.maps.Marker({
                position: pos,
                map: this.map,
                title: 'Hello World!'
              });
            },
            () => {
              console.log('navigator disabled');
            }
          );
        } else {
          // Browser doesn't support Geolocation
          console.log('navigator disabled');
        }
      } else this.props.onError();
    }
  }

  render() {
    return (
      <div>
      <div ref="map" style={{ height: '500px', width: '100%' }}></div>
        {!this.map && <div className="center-md">Loading...</div>}
      </div>

    );
  }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDWyPmNi8qLf7Viugiw1bBQaBDQOPdXvhY'])(Maps);
