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




    render() {
        console.log(this.props)
        let results;

        if (this.props.shows.length > 0) {
            results = this.generateHTML(this.props.shows)
        } else {
            results = '';
        }

        const concerts = this.props.shows.map(show => {
            console.log(show)
            return (<p key={show.id}>{show.id}</p>)
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
                        
                    </tbody>
                </table>
                {concerts}
            </div> 
        )
    }
}

export default Results;