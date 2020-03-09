import React, {Component} from 'react'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: ''
    }
  }

  

  render() {
    return (
      <div>
        <header>
          <h1>
            Twitch Game Search
          </h1>
        </header>
        <main className='App'>
          <Main />
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default App;