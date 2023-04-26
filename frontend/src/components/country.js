import { Container } from "@chakra-ui/react";

export default function Country(props) {
  const countryData = props.countryData;
  console.log(countryData);
  return (
    <Container borderRadius={"50px"} border={"white 1px"}>
      <p>{countryData.name.common}</p>
    </Container>
  );
}
