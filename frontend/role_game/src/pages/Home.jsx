import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background: #f9f9f9; /* Simple solid background */
  padding: 20px;
  font-family: "Poppins", sans-serif; /* Clean modern font */
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 40px; /* More space below the title */
  text-transform: uppercase; /* Gives it a bold modern look */
  letter-spacing: 2px;
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 20px 50px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 50px; /* Rounded button */
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a86ff;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to the Role-Playing Game</Title>
      <StyledButton onClick={() => (window.location.href = "/game")}>
        Start Game
      </StyledButton>
    </HomeContainer>
  );
}

export default Home;
