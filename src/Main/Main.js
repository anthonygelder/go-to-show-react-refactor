import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: '',
            games: []
        } 
    }

    updateGame(game) {
        this.setState({game: game})
    }
    
    searchGame(event) {        
        event.preventDefault();
        this.updateGames(this.state.game)
    }

    updateGames(game) {
        const url = `https://api.twitch.tv/kraken/search/games?query=${game}`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': 'nf75v094du18ul2j54yqbcb80mfm26'
            }
        };
    
        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                games: data,
                error: null
                });
            })
            .catch(err => {
                this.setState({
                error: err.message
            });
        });
    }

    // generateGames(games) {

    // }


    render() {
        // const gamesList = this.state.games.map(game => (
        //     <div key={game._id} value={game._id}>
        //         <h1>{game.name}</h1>
        //     </div>
        // ))

        console.log(this.state.games)

        return (
            <main>
                <form onSubmit={e => this.searchGame(e)}>
                    <label htmlFor="game">Game </label>
                    <input required type="text" name="game" id="game" onChange={e => this.updateGame(e.target.value)}/>
                <button type="submit">
                    Search
                </button>
                </form>
                {/* <div>{gamesList}</div> */}
            </main>
        )
    }
}

export default Main;