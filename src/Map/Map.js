import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'


class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 0 ,
                lng: 0 
              },
              zoom: 11
        }
    }

    componentDidMount() {
        this.setState({
            center: {
                lat: this.props.shows.lat,
                lng: this.props.shows.lng
            }
        })
    }
    
    render() {
        console.log(this.props)
        return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCiv03ah7ZjCY_Nx6S6ZFnrX32ThZX6_-w' }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
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