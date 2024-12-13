import styled from "styled-components";

const EventContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
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

function Event({ event, onActionSelect }) {
  return (
    <EventContainer>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <ButtonGroup>
        {event.actions.map((action) => (
          <StyledButton key={action.id} onClick={() => onActionSelect(action)}>
            {action.text}
          </StyledButton>
        ))}
      </ButtonGroup>
    </EventContainer>
  );
}

export default Event;
