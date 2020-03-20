import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'


class Map extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    
    render() {
        return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCiv03ah7ZjCY_Nx6S6ZFnrX32ThZX6_-w' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
            </GoogleMapReact>
        </div>
        )
    }
}

export default Map;