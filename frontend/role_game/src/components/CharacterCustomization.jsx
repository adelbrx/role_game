import { useState } from "react";
import styled from "styled-components";
import { mockCharacters } from "../utils/mockData";

const Container = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.shadow};
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center; /* Center text inside the container */
`;

const FormGroup = styled.div`
  margin: 1rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.shadow};
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: ${({ theme }) => theme.primary};
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  button {
    margin-top: 1rem;
  }
`;

function CharacterCustomization({ onCharacterSelect }) {
  const maxPoints = 30; // Max points for customization
  const [customizing, setCustomizing] = useState(false);
  const [customCharacter, setCustomCharacter] = useState({
    name: "",
    strength: 10,
    agility: 10,
    health: 10,
    inventory: [],
  });
  const [error, setError] = useState("");

  const totalPoints =
    customCharacter.strength + customCharacter.agility + customCharacter.health;

  const handleCustomChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    if (intValue < 0) {
      setError("Values cannot be negative.");
      return;
    }

    setCustomCharacter((prev) => ({
      ...prev,
      [name]: intValue,
    }));

    setError(""); // Clear any errors
  };

  const handleCreateCustomCharacter = () => {
    if (customCharacter.name.trim() === "") {
      setError("Please provide a name for your custom character.");
      return;
    }

    if (totalPoints > maxPoints) {
      setError(`Total points cannot exceed ${maxPoints}.`);
      return;
    }

    const newCharacter = { ...customCharacter, inventory: [] };
    onCharacterSelect(newCharacter);
  };

  const handleSelectCharacter = (character) => {
    onCharacterSelect(character);
  };

  return (
    <Container>
      {!customizing && (
        <>
          <h2>Select a Predefined Character</h2>
          {mockCharacters.map((character) => (
            <Card key={character.id}>
              <h3>{character.name}</h3>
              <p>Strength: {character.strength}</p>
              <p>Agility: {character.agility}</p>
              <p>Health: {character.health}</p>
              <button onClick={() => handleSelectCharacter(character)}>
                Select
              </button>
            </Card>
          ))}
          <ButtonGroup>
            <button onClick={() => setCustomizing(true)}>
              Customize Character
            </button>
          </ButtonGroup>
        </>
      )}
      {customizing && (
        <>
          <h2>Customize Your Own Character</h2>
          <FormGroup>
            <label htmlFor="name">Character Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customCharacter.name}
              onChange={(e) =>
                setCustomCharacter((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="strength">Strength:</label>
            <input
              type="number"
              id="strength"
              name="strength"
              value={customCharacter.strength}
              onChange={handleCustomChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="agility">Agility:</label>
            <input
              type="number"
              id="agility"
              name="agility"
              value={customCharacter.agility}
              onChange={handleCustomChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="health">Health:</label>
            <input
              type="number"
              id="health"
              name="health"
              value={customCharacter.health}
              onChange={handleCustomChange}
            />
          </FormGroup>
          <p>
            Total Points Used: {totalPoints} / {maxPoints}
          </p>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonGroup>
            <button onClick={handleCreateCustomCharacter}>
              Create Character
            </button>
            <button onClick={() => setCustomizing(false)}>
              Back to Selection
            </button>
          </ButtonGroup>
        </>
      )}
    </Container>
  );
}

export default CharacterCustomization;
