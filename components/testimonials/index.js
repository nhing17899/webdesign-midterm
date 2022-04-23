import styled from "styled-components";
import classes from "./testimonials.module.css";


const Text = styled.div`
  margin-top: 70px;
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
  return (
    <Text>
      <h3 style={{ fontStyle: "italic", fontWeight: "lighter" }}>
        "Customer service shouldn't just be a department, it should be the
        entire company."
      </h3>
    </Text>
  );
}

export default Testimonials;
