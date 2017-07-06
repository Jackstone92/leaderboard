import React from 'react';

import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title} subtitle="Created by Jack Stone"/>
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer score={10} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};


export default App;
