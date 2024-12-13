// gameLogic.js

// Function to apply health effect (positive or negative)
export function applyHealthEffect(character, healthEffect) {
  return {
    ...character,
    health: character.health + healthEffect,
  };
}

// Function to increment the kill count after defeating an enemy
export function incrementKills(character) {
  return {
    ...character,
    kills: character.kills + 1,
  };
}

// Function to check if the game is over (if health <= 0)
export function checkGameOver(character) {
  return character.health <= 0;
}

// Function to check if the player has won (after 3 kills)
export function checkWin(character) {
  return character.kills >= 3;
}
