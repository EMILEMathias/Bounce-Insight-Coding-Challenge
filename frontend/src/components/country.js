import { Container, ListItem, UnorderedList } from "@chakra-ui/react";

export default function Country(props) {
  const countryData = props.countryData;
  console.log(countryData);
  return (
    <Container
      borderRadius={"5px"}
      border={"solid white 1px"}
      my={"5px"}
      w={"30%"}
    >
      <p>Name : {countryData.name.common}</p>
      <p>Alternative name : {countryData.altSpellings[1]}</p>
      <p>Capital : {countryData.capital[0]}</p>
      <p>Region : {countryData.region}</p>
      <p>Subregion : {countryData.subregion}</p>
      <p>Languages :</p>
      <UnorderedList>
        Languages :{" "}
        {Object.keys(countryData.languages).map((language) => (
          <ListItem>{countryData.languages[language]}</ListItem>
        ))}
      </UnorderedList>
      <p>Currencies :</p>
      <UnorderedList>
        {Object.keys(countryData.currencies).map((currency) => (
          <ListItem>
            {countryData.currencies[currency].name +
              " " +
              countryData.currencies[currency].symbol}
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
}
