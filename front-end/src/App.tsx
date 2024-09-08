import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
