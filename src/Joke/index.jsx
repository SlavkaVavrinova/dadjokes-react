import React, { useState } from 'react';

import './style.css';

export const Joke = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleClickUp = () => {
    setLikes(likes + 1);
  };

  const handleClickDown = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={props.userAvatar} />
          <p class="user-name">{props.userName}</p>
        </div>

        <p class="joke__text">{props.text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={handleClickUp}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {likes}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={handleClickDown}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {dislikes}
        </span>
      </div>
    </div>
  );
};
