import React, {Component} from 'react'
import './Results.css'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }



    generateHTML(shows) {
        console.log('hello')
        console.log(shows)
    }

    urlStr(str) {
        return str.replace(/ /g,"+");
    }

    convertTime(time) {
        if (time === null) {
            return 'N/A'
        } else {
            let amPm;
            let militaryHrMn = time.substring(0, time.length - 3);
            let minutes = militaryHrMn.substring(3);
            let hour = time.substring(0, time.length - 6);
            
            if (hour > 12) {
                hour = hour - 12;
                amPm = "pm";
            } else {
                amPm = "am";
            }
            return `${hour}:${minutes}${amPm}`;
        }
    }


    render() {
        console.log(this.props)
        // let results;

        // if (this.props.shows.length > 0) {
        //     results = this.generateHTML(this.props.shows)
        // } else {
        //     results = '';
        // }

        const concerts = this.props.shows.map(show => {
            const city = show.location.city;
            const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + this.urlStr(show.venue.displayName)
            
            console.log(show)
            return (<tr key={show.id}>
                        <td><a href={show.uri} rel="noopener noreferrer" target="_blank">{show.performance[0].displayName}</a></td>
                        <td><a href={mapsUrl} rel="noopener noreferrer" target="_blank">{show.venue.displayName}</a></td>
                        <td valign="top">{this.convertTime(show.start.time)}</td>
                        <td>{city.substring(0, city.length - 8)}</td>
                    </tr>)
            }
        )
        

        
        return (
            <div id="tableContainer">
                <table id="results">
                    <tbody>
                        <tr>
                            <td align="left">Artist</td>
                            <td align="left">Venue</td>
                            <td align="left">Time</td>
                            <td align="left">City</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {concerts}
                    </tbody>
                </table>
            </div> 
        )
    }
}

export default Results;