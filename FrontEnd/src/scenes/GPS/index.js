// Dependencies
import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export class GPS extends Component {
    state = {
        selectedPlace: "Hawai",
        lat: 10.99304,
        lon: -74.8281
    }
    onMouseMove(){
        this.setState({
            lon: this.state.lon + 0.0001,
            lat: this.state.lat + 0.0001
        })
        console.log(this.state.lon);
        
    }
  render() {
    return (
      <Map 
      google={this.props.google}
      zoom={14} 
      onMousemove={this.onMouseMove.bind(this)}
      initialCenter={{
        lat: this.state.lat,
        lng: this.state.lon
      }} 
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} position={{lat: this.state.lat, lng: this.state.lon}} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAaUgFuVypDeWug-2htEXKEssI7TpifSg8"
})(GPS)
