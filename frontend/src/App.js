import { Box, Container, Flex, Heading, Input } from "@chakra-ui/react";
import "./styles/globals.css";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import React from "react";
import axios from "axios";
import countries from "./countries.json";

function App() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);
  axios.get("http://localhost:3001/country/france").then((response) => {
    console.log(response.data);
  });

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };
  return (
    <Container
      bg={"rgb(30, 30, 34)"}
      color={"white"}
      maxW={"none"}
      height={"100vh"}
    >
      <Flex
        h={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading as={"h1"} mb={"100px"}>
          Country data
        </Heading>
        <Box maxW={"600px"} w={"600px"}>
          <CUIAutoComplete
            inputStyleProps={{
              bg: "rgb(30, 30, 34)",
            }}
            listItemStyleProps={{ bg: "rgb(30, 30, 34)" }}
            listStyleProps={{
              bg: "rgb(30, 30, 34)",
              maxH: "500px",
            }}
            toggleButtonStyleProps={{ bg: "rgb(30, 30, 34)", border: "1px" }}
            tagStyleProps={{
              bg: "rgb(30, 30, 34)",
              color: "white",
              border: "1px",
              h: "30px",
            }}
            highlightItemBg={"rgb(40, 40, 44)"}
            label="Looking for a country ? Search here !"
            placeholder="Type a Country"
            onCreateItem={handleCreateItem}
            items={pickerItems}
            selectedItems={selectedItems}
            onSelectedItemsChange={(changes) =>
              handleSelectedItemsChange(changes.selectedItems)
            }
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
