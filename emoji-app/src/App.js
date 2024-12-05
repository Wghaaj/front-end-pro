import logo from './logo.svg';
import './App.css';
import './styles.css'
import React, { Component } from 'react';

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {
        emoji1: parseInt(localStorage.getItem('emoji1')) || 0,
        emoji2: parseInt(localStorage.getItem('emoji2')) || 0,
        emoji3: parseInt(localStorage.getItem('emoji3')) || 0,
      },
      winner: null,
    };

    this.emojiMap = {
      emoji1: '😀',
      emoji2: '😊',
      emoji3: '😎',
    };
  }

  vote = (emoji) => {
    this.setState((prevState) => {
      const newVotes = { ...prevState.votes, [emoji]: prevState.votes[emoji] + 1 };
      localStorage.setItem(emoji, newVotes[emoji]);
      return { votes: newVotes };
    });
  };

  showResults = () => {
    const { votes } = this.state;
    let maxVotes = 0;
    let winner = '';

    Object.entries(votes).forEach(([emoji, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        winner = emoji;
      }
    });

    this.setState({ winner: { emoji: this.emojiMap[winner], votes: maxVotes } });
  };

  clearResults = () => {
    const resetVotes = {
      emoji1: 0,
      emoji2: 0,
      emoji3: 0,
    };

    localStorage.clear();
    this.setState({ votes: resetVotes, winner: null });
  };

  render() {
    const { votes, winner } = this.state;

    return (
      <div>
        <h1>Голосування за найкращий смайлик</h1>
        <div className='flex wrapper'>
          <div className='flex col'>
            <span>😀</span> 
            <div>
            <button onClick={() => this.vote('emoji1')} className='btn'>Vote</button> 
            {votes.emoji1}
            </div>
          </div>
          <div className='flex col'>
            <span>😊</span> 
            <div>
            <button onClick={() => this.vote('emoji2')} className='btn'>Vote</button> 
            {votes.emoji2}
            </div>
          </div>
          <div className='flex col'>
            <span>😎</span> 
            <div>
            <button onClick={() => this.vote('emoji3')} className='btn'>Vote</button> 
            {votes.emoji3}
            </div>
          </div>
        </div>

        <button onClick={this.showResults} className='btn-show'>Show Results</button>
        <p>
          {winner && (
            <span>
              Переможець: {winner.emoji} (Кількість голосів: {winner.votes})
            </span>
          )}
        </p>

        <button onClick={this.clearResults} className='btn-clear'>Очистити результати</button>
      </div>
    );
  }
}

export default EmojiVoting;

