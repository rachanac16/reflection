import "./App.css";
import { React } from "react";
import { ThemeProvider, createTheme, Grid } from "@mui/material";
import About from "./pages/About";
import { hover } from "@testing-library/user-event/dist/hover";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

const theme = createTheme({
  palette: {
    primary: {
      main: "#886176",
    },
    secondary: {
      main: "#ffedd2",
    },
  },
  typography: {
    fontFamily: ["Old Standard TT, serif", "Roboto, sans-serif"],
  },
});

const scrollTo = (ref, behavior = "smooth") => {
  const anchor = document.querySelector(ref);
  anchor.scrollIntoView({ behavior: behavior, block: "start" });
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home scrollTo={scrollTo} />
        <About scrollTo={scrollTo} />
        <Education scrollTo={scrollTo} />
        <Experience scrollTo={scrollTo} />
        <Projects scrollTo={scrollTo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
