// Players Collection //

import { Mongo } from 'meteor/mongo';

// Import numeral library//
import numeral from 'numeral';

// Create new mongo collection //
export const Players = new Mongo.Collection('players');


// Sort Ranking //
export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if(index != 0 && players[index-1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };

  });
}
