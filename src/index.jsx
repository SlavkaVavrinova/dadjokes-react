import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { jokes } from './jokes';
import { Joke } from './Joke/index';

const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.userName}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      ></Joke>
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
