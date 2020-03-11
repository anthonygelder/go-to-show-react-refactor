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

        
        return (
            <>
                <div id="tableContainer">
                    <table id="results">
                        {results}
                    </table>
                </div> 
            </>
        )
    }
}

export default Results;