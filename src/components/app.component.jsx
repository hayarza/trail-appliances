import { Box, createTheme, ThemeProvider } from "@mui/material";
import Header from "./header.component";
import Interviewer from "./interviewer.component";
import "tailwindcss/tailwind.css";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
    background: {
      main: "#282c34",
    },
  },
});

const App = (props) => (
  <ThemeProvider theme={customTheme}>
    <Box
      sx={{
        bgcolor: "background.main",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Interviewer />
    </Box>
  </ThemeProvider>
);

export default App;
