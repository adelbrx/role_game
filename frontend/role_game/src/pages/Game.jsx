import { useState } from "react";
import CharacterCustomization from "../components/CharacterCustomization";
import Event from "../components/Event";
import { mockEvents } from "../utils/mockData"; // Assuming mockEvents is an array of events
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 30px;
`;

const LogContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.shadow};
  border-radius: 8px;
  text-align: left;
  overflow-y: auto;
  max-height: 200px;
`;

const LogItem = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }
`;

function Game() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [log, setLog] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  // Random event selection logic
  const randomEvent = () => {
    const randomIndex = Math.floor(Math.random() * mockEvents.length);
    return mockEvents[randomIndex];
  };

  const handleCharacterSelect = (character) => {
    // Ensure the character's kills are initialized to 0 when selected
    const initializedCharacter = { ...character, kills: 0, health: 100 }; // Ensure health is initialized

    setSelectedCharacter(initializedCharacter);
    setGameOver(false);
    setWin(false);
    setLog([]);
    setCurrentEventIndex(0); // Reset event index to start from the first event
  };

  const handleActionSelect = (action) => {
    if (gameOver || win) return;

    // Log the action taken
    setLog((prev) => [...prev, `Action: ${action.text}`]);

    // Apply the effects of the action
    if (action.effect.health) {
      setSelectedCharacter((prev) => ({
        ...prev,
        health: prev.health + action.effect.health,
      }));
    }

    if (action.effect.inventory) {
      setSelectedCharacter((prev) => ({
        ...prev,
        inventory: [...prev.inventory, ...action.effect.inventory],
      }));
    }

    // Handle specific action types (e.g., Fight, Run)
    if (action.text === "Fight") {
      // Fighting reduces health (example: reduce 20 health)
      setSelectedCharacter((prev) => ({
        ...prev,
        health: prev.health - 20,
        kills: prev.kills + 1, // Increment kills after each fight
      }));
    }

    if (action.text === "Run") {
      // Running could reduce health (example: reduce 10 health)
      setSelectedCharacter((prev) => ({
        ...prev,
        health: prev.health - 10,
      }));
    }

    // **Lose condition**: Game over if health reaches zero
    if (selectedCharacter?.health <= 0) {
      setGameOver(true);
      setLog((prev) => [...prev, "Game Over! Your character has died."]);
      return; // Stop the function here so the game doesn't proceed
    }

    // **Win condition**: Win after 3 kills
    if (selectedCharacter?.kills === 3) {
      setWin(true);
      setLog((prev) => [
        ...prev,
        "You win! Congratulations! You killed 3 enemies!",
      ]);
      return; // Stop the function here so the game doesn't proceed
    }

    // Select a random next event if the game isn't over or won
    if (!gameOver && !win) {
      const nextEvent = randomEvent();
      setLog((prev) => [...prev, `Next event: ${nextEvent.title}`]);
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setWin(false);
    setCurrentEventIndex(0); // Reset event index to start from the first event
    setLog([]); // Clear the log
    setSelectedCharacter(null); // Reset the character selection
  };

  return (
    <GameContainer>
      <Title>Game Screen</Title>

      {!selectedCharacter && (
        <CharacterCustomization onCharacterSelect={handleCharacterSelect} />
      )}

      {selectedCharacter && !gameOver && !win && (
        <Event event={randomEvent()} onActionSelect={handleActionSelect} />
      )}

      {gameOver && <h2>Game Over! Check your log for details.</h2>}

      {win && <h2>You Win! Congratulations! You killed 3 enemies!</h2>}

      {selectedCharacter && (
        <div>
          <p>Name: {selectedCharacter.name}</p>
          <p>Health: {selectedCharacter.health}</p>
          <p>Strength: {selectedCharacter.strength}</p>
          <p>Agility: {selectedCharacter.agility}</p>
          <p>Inventory: {selectedCharacter.inventory.join(", ")}</p>
          <p>Kills: {selectedCharacter.kills}</p> {/* Display kills */}
        </div>
      )}

      <LogContainer>
        <h3>Action Log</h3>
        {log.length > 0 ? (
          log.map((entry, index) => <LogItem key={index}>{entry}</LogItem>)
        ) : (
          <LogItem>No actions performed yet.</LogItem>
        )}
      </LogContainer>

      <ButtonGroup>
        <StyledButton onClick={handleRestart}>Restart Game</StyledButton>
      </ButtonGroup>
    </GameContainer>
  );
}

export default Game;
