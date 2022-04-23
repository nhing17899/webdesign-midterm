import { Container, Row, Col } from "react-bootstrap";
import MemberCard from "./MemberCard";
import classes from "./team.module.css";
import styled from "styled-components";
import photo1 from '../../public/images/nhi.jpg';
import { faDog, faCat, faFish, faDragon } from "@fortawesome/free-solid-svg-icons";

const Text = styled.div`
  margin-top: 190px;
  font-size: 1.5em;
  background: gray;
  text-align: center;
  align-items: center;
  color: white;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Name = styled.p`
margin-top: 80px;
  font-size: 1em;
  font-weight: lighter;
  color: white;
`;

function Team() {
  return (
    <Text>
      <h2 style={{marginTop: "-20px"}}>Our Team</h2>
      <Container className={classes.teamContainer}>
        <Row className={classes.teamContainer}>
          <Col>
            <MemberCard icon={faDog} name="Chuck"/>
          </Col>
          <Col>
            <MemberCard icon={faCat} name="Murphy"/>
          </Col>
          <Col>
            <MemberCard icon={faDragon} name="Dann"/>
          </Col>
          <Col>
            <MemberCard icon={faFish} name="Norris"/>
          </Col>
        </Row>
      </Container>
    </Text>
  );
}

export default Team;
