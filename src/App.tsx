import { Box } from "@mui/material";

import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <Header />

    <Checkout />

    <Footer />
  </Box>
);

export default App;
