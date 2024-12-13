import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #282c34;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/game">Game</Link>
    </Nav>
  );
}

export default Navbar;
