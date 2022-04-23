import styled from "styled-components";
import ServicesContainer from "./ServicesContainer";


const Text = styled.div`
  margin-top: 150px;
  background: white;
  font-size: 1.5em;
  text-align: center;
  align-items: center;
  color: gray;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Services() {
  return (
    <Text>
      <h2 style={{margin: "50px"}}>
        Services
      </h2>
      <ServicesContainer />
    </Text>
  );
}

export default Services;
