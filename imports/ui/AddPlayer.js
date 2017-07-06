import React from 'react';

import { Players } from './../api/players';


class AddPlayer extends React.Component {

  handleSubmit(event) {
    let playerName = event.target.playerName.value;

    event.preventDefault();

    if(playerName) {
      // players insert //
      // Insert new document into players collection //
      Players.insert({
        name: playerName,
        score: this.props.score
      });
      // clear value //
      event.target.playerName.value = '';
    }
  }

  render() {
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
