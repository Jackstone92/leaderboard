import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
// Meteor Tracker - track queries eg. when collection updates //
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';

import App from './../imports/ui/App';


Meteor.startup(function() {
  // Call Tracker.autorun //
    // create a variable called players-> set equal to Players.find().fetch() //
  // render players to the screen //
  Tracker.autorun(function() {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    // new list //
    let positionedPlayers = calculatePlayerPositions(players);

    ReactDOM.render(<App title="LeaderBoard" players={positionedPlayers}/>, document.getElementById('app'));
  });

});
