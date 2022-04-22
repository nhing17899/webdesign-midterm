import styled from "styled-components";
import classes from "./testimonials.module.css";

const Text = styled.div`
  background: gray;
  font-size: 1.5em;
  text-align: center;
  align-items: center;
  color: white;
  height: 25vh;
  display: flex;
  justify-content: center;
`;

function Testimonials() {
  return <Text>Testimonials</Text>;
}

export default Testimonials;
