import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </StrictMode>
);
