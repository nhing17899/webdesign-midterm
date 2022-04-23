import { Container, Row, Col } from "react-bootstrap";
import MemberCard from "./MemberCard";
import classes from "./team.module.css";
import styled from "styled-components";

const Text = styled.div`
  margin-top: 190px;
  font-size: 1.5em;
  background: gray;
  text-align: center;
  align-items: center;
  color: white;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Team() {
  return (
    <Text>
      <h2 style={{ marginTop: "350px" }}>Our Team</h2>
      <Container className={classes.teamContainer}>
        <Row className={classes.teamContainer}>
          <Col>
            <MemberCard />
          </Col>
          <Col>
            <MemberCard />
          </Col>
        </Row>
        <Row className={classes.teamContainer}>
          <Col>
            <MemberCard />
          </Col>
          <Col>
            <MemberCard />
          </Col>
        </Row>
      </Container>
    </Text>
  );
}

export default Team;
