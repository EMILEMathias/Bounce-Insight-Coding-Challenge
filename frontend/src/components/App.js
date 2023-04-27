import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import "../styles/globals.css";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import React from "react";
import axios from "axios";
import countries from "../countries.json";
import Country from "./country";

function App() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedCountriesData, setSelectedCountriesData] = React.useState([]);

  React.useEffect(() => {
    async function fetchCountriesData() {
      const result = await Promise.all(
        selectedItems.map((aSelectedItem) =>
          axios(`${process.env.REACT_APP_BACKEND_URL}${aSelectedItem.label}`)
        )
      );
      setSelectedCountriesData(result.map((aRes) => aRes.data[0]));
    }

    fetchCountriesData();
  }, [selectedItems]);

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
      minH={"100vh"}
    >
      <Flex
        h={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading as={"h1"} my={"100px"}>
          Country data
        </Heading>
        <Box maxW={"600px"} w={"600px"} mb={"100px"}>
          <CUIAutoComplete
            inputStyleProps={{
              bg: "rgb(30, 30, 34)",
            }}
            listItemStyleProps={{ bg: "rgb(30, 30, 34)" }}
            listStyleProps={{
              bg: "rgb(40, 40, 44)",
              maxH: "200px",
              overflowY: "scroll",
              cursor: "pointer",
            }}
            toggleButtonStyleProps={{ bg: "rgb(30, 30, 34)", border: "1px" }}
            tagStyleProps={{
              bg: "rgb(30, 30, 34)",
              color: "white",
              border: "1px",
              h: "30px",
            }}
            highlightItemBg={"rgb(50, 50, 54)"}
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
      <Flex
        gap={"10px"}
        marginX={"10vw"}
        justifyContent={"center"}
        wrap={"wrap"}
      >
        {selectedCountriesData.map((aCountryData, index) => (
          <Country countryData={aCountryData}></Country>
        ))}
      </Flex>
    </Container>
  );
}

export default App;
