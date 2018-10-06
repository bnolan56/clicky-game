import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import cardImages from './cardImages.json'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    cardImages: cardImages,
  }

  clickedTwice = id => {
    this.state.cardImages.forEach(element => {
      if (element.id === id) {
        if (element.beenClicked) {
          alert('you lose');
          this.resetGame()
          return false
        }
        if (!element.beenClicked) {
          this.scoreBoard()
          element.beenClicked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.highScore()
        }
      }
    });
    this.randomizeCards(this.state.cardImages)
  }

  randomizeCards = array => {
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    shuffle(this.state.cardImages)
    this.setState({ cardImages })
  }

  resetGame = cardImages => {
    this.state.cardImages.forEach(element => {
      element.beenClicked = false;
    })
    this.setState({
      score: 0,
    })
  }
  resetGameandHighScore = cardImages => {
    this.state.cardImages.forEach(element => {
      element.beenClicked = false;
    })
    this.setState({
      score: 0,
      highScore: 0
    })
  }

  scoreBoard = () => {
    this.setState(newState => ({ score: newState.score + 1 }))
  }

  highScore = () => {
    this.setState(newState => ({ highScore: newState.score }))
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row nav'>
            <div className='col-lg-12 scoreboard'>
              <br />
              <h2 className='score'>
                Score: {this.state.score} <button onClick={() => this.resetGame()} id='reset' className=' btn btn-primary reset'>Reset Game!</button>
              </h2>
              <h2 className='highscore'>
                High Score: {this.state.highScore}  <button onClick={() => this.resetGameandHighScore()} id='reset' className='btn btn-warning reset2'>Reset High Score/Game</button>
              </h2>
            </div>
          </div>
          <div className='row background' >
            <div id='grid' className='col-lg-12 grid'>
              {this.state.cardImages.map(data => (
                <Card randomize={() => this.randomizeCards(this.state.cardImages)} clickedTwice={this.clickedTwice} boolean={this.state.beenClicked} key={data.id} id={data.id} path={data.path} />
              ))}
            </div>
          </div>
        </div>
          <Footer />
      </div>
    )
  }

}

export default App;
