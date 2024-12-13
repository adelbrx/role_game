import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fc;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 1rem;
    margin: 0;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.primary};
  }

  button {
    cursor: pointer;
    font-weight: bold;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }

  input[type="number"], input[type="text"] {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.primary};
    font-size: 1rem;
    margin-top: 8px;
    width: 100%;
  }

  input[type="number"]:focus, input[type="text"]:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondary};
  }
`;

export default GlobalStyle;
