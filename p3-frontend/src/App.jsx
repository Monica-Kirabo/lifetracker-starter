import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Navbar from "./Components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "orange", flexGrow: 0 }}
      >
        my container
      </Container>
    </>
  );
}

export default App;
