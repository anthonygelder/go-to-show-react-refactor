import React, {Component} from 'react'
import Map from './Map/Map'
import Search from './Search/Search'
import Results from './Results/Results'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  

  render() {
    return (
      <div>
        <header>
          <h1>
            Go To Show
          </h1>
          <Search />
        </header>
        <main className='App'>
          <Results />
          <Map />
        </main>
      </div>
    );
  }
}

export default App;