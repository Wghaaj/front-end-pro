import logo from './logo.svg';
import './styles.css';
import React, { useState, useEffect } from 'react';

const EmojiVoting = () => {
  const initialVotes = {
    emoji1: parseInt(localStorage.getItem('emoji1')) || 0,
    emoji2: parseInt(localStorage.getItem('emoji2')) || 0,
    emoji3: parseInt(localStorage.getItem('emoji3')) || 0,
    emoji4: parseInt(localStorage.getItem('emoji4')) || 0,
    emoji5: parseInt(localStorage.getItem('emoji5')) || 0,
  };

  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  const emojiMap = {
    emoji1: '😀',
    emoji2: '😊',
    emoji3: '😎',
    emoji4: '🤩',
    emoji5: '😍',
  };

  useEffect(() => {
    Object.keys(votes).forEach((key) => {
      localStorage.setItem(key, votes[key]);
    });
  }, [votes]);

  const vote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const showResults = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winnerEmoji = Object.keys(votes).find((key) => votes[key] === maxVotes);
    setWinner({ emoji: emojiMap[winnerEmoji], votes: maxVotes });
  };

  const clearResults = () => {
    const resetVotes = {
      emoji1: 0,
      emoji2: 0,
      emoji3: 0,
      emoji4: 0,
      emoji5: 0,
    };
    setVotes(resetVotes);
    localStorage.clear();
    setWinner(null);
  };

  return (
    <div>
      <h1>Голосування за найкращий смайлик</h1>
      <div className='flex wrapper'>
        {Object.keys(emojiMap).map((key) => (
          <div key={key} className='flex col'>
            <span>{emojiMap[key]}</span>{' '}
            <div>
              <button onClick={() => vote(key)} className='btn'>Vote</button>
              {votes[key]}
            </div>
          </div>
        ))}
      </div>

      <button onClick={showResults} className='btn-show'>Show Results</button>
      {winner && (
        <p>
          Переможець: {winner.emoji} <br />
          Кількість голосів: {winner.votes}
        </p>
      )}

      <button onClick={clearResults} className='btn-clear'>Очистити результати</button>
    </div>
  );
};

export default EmojiVoting;
