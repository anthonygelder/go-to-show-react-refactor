import React, {Component} from 'react'
import Map from './Map/Map'
import Results from './Results/Results'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      date: '',
      results: [],
      lat: 0,
      lng: 0
    }
  }

  updateCity(city) {
    this.setState({city: city})
  }

  updateDate(date) {
    this.setState({date: date})
  }

  getEvents(id, date) {
    const apiUrl = `https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=lKGlBIRmnawI3yka&min_date=${date}&max_date=${date}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.status === 'error') {
            throw new Error(responseJson.message)
        }
        this.setState({results: responseJson.resultsPage.results.event})
    })
    .catch(error => {
        console.log(error)
    })
}

getCityId(city, date) {
    const apiUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=lKGlBIRmnawI3yka`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'error') {
                throw new Error(responseJson.message)
            }
            // console.log(responseJson)
            this.setState({ lat: responseJson.resultsPage.results.location[0].city.lat,
                            lng: responseJson.resultsPage.results.location[0].city.lng})
            this.getEvents(responseJson.resultsPage.results.location[0].metroArea.id, date)
        })
        .catch(error => {
            console.log(error)
        });
}

handleSubmit(e) {
  e.preventDefault()
  let city = this.state.city
  let date = this.state.date
  this.getCityId(city, date)
}

  render() {
    return (
      <div>
        <header>
          <h1>
            Go To Show
          </h1>
          <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="city">City:</label>
                        <input required type="text" name="city" id="city-search" onChange={e => this.updateCity(e.target.value)}/>
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date-search"  onChange={e => this.updateDate(e.target.value)}/>
                    <button type="submit">
                        Search
                    </button>
                </form>
        </header>
        <main className='App'>
          <Results shows={this.state.results} />
          <Map shows={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;