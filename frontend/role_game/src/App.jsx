import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
