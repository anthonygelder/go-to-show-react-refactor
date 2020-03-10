import React, {Component} from 'react'

class Search extends Component {
    constructor(props) {
      super(props)
      this.state = {
          city: '',
          date: ''
      }
    }

    updateCity(city) {
        this.setState({city: city})
    }

    updateDate(date) {
        this.setState({date: date})
    }

    convertDate(date) {
        let day = date.substring(8);
        let month = date.substring(5, 7);
        let year = date.substring(2,4);
        let newDate = `${month} /${day} /${year}`;
        return newDate;
    }

    getEvents(id, date) {
        // $('#error').empty();
        // if (date === getCurrentDate()) {
        //     $('p').html('Tonight');
        // } else {
        //     let newDate = convertDate(date);
        //     $('p').html(`On ${newDate}`);
        // }
        const apiUrl = `https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=lKGlBIRmnawI3yka&min_date=${date}&max_date=${date}`;
        
        fetch(apiUrl)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'error') {
                throw new Error(responseJson.message)
            }
            console.log(responseJson)
            // processData(responseJson)
        })
        .catch(error => {
            // $('#map').hide();
            // $('#error').text(`Something went wrong. Try again.`);
        })
    }

    getCityId(city, date) {
        const apiUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=lKGlBIRmnawI3yka`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.status === 'error') {
                    throw new Error(responseJson.message)
                    // $('#map').hide();
                }
                // console.log(responseJson)
                this.getEvents(responseJson.resultsPage.results.location[0].metroArea.id, date)
            })
            .catch(error => {
                // $('#error').text(`Something went wrong. Try again.`);
            });
    }

    handleSubmit(e) {
        console.log('submit')
        e.preventDefault()
        let city = this.state.city
        let date = this.state.date

        this.getCityId(city, date)

        // if (date === '') {
        //     date = getCurrentDate();
        //     $('p').html('Tonight');
        // }
        // if (date < getCurrentDate()) {
        //     $('#map').hide();
        //     $('#error').text(`Date cannot be in the past.`);
        // } else {
        //     $('#map').show();
        //     getCityId(city, date);
        // }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="city">City:</label>
                        <input required type="text" name="city" id="city-search" onChange={e => this.updateCity(e.target.value)}/>
                        <label for="date">Date:</label>
                        <input type="date" name="date" id="date-search"  onChange={e => this.updateDate(e.target.value)}/>
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;