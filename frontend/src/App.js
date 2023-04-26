import { Box, Container, Flex } from "@chakra-ui/react";
import "./styles/globals.css";

function App() {
  return (
    <Container bg={"rgb(30, 30, 34)"} color={"white"} m={0}>
      <Flex alignItems={"center"} alignContent={"center"}>
        <h1>Play Like Pro</h1>
      </Flex>
    </Container>
  );
}

export default App;
