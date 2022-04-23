import "./team.module.css";
import {Card} from 'react-bootstrap';
import styled from "styled-components";
import photo1 from '../../assets/images/nhi.jpg';

const Button = styled.button`
  font-size: "1em";
  color: grey;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 1.2px 1px 0.6px black;
  }
`;

function MemberCard() {
  return (
    <Card style={{ height: "19rem", width: "18rem", margin: "1rem", borderRadius: "1.2rem" }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color: "gray"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MemberCard;
