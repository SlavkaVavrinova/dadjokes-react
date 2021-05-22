import React from 'react';

import './style.css';

export const Joke = (props) => {
  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={props.userAvatar}/>
          <p class="user-name">{props.userName}</p>
        </div>

        <p class="joke__text">{props.text}</p>
      </div>
      <div class="joke__likes">
        <button id="btn-up" class="btn-like btn-like--up"></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {props.likes}
        </span>
        <button id="btn-down" class="btn-like btn-like--down"></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {props.dislikes}
        </span>
      </div>
    </div>
  );
};
