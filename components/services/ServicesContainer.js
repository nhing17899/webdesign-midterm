import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPaperPlane,
  faLock,
  faMoneyBillWave,
  faCogs,
  faFaceGrinHearts,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Text = styled.p`
  margin-top: 10px;
  font-size: 1em;
  font-weight: lighter;
`;

function ServicesContainer() {
  return (
    <Container>
      <Row style={{ marginBottom: "80px" }}>
        <Col>
          <FontAwesomeIcon size="3x" icon={faCoffee} />
          <Text>Superb Consultancy</Text>
        </Col>
        <Col>
          <FontAwesomeIcon size="3x" icon={faPaperPlane} />
          <Text>Efficient Delivery</Text>
        </Col>
        <Col>
          <FontAwesomeIcon size="3x" icon={faLock} />
          <Text>Security</Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <FontAwesomeIcon size="3x" icon={faMoneyBillWave} />
          <Text>Competitive Price</Text>
        </Col>
        <Col>
          <FontAwesomeIcon size="3x" icon={faCogs} />
          <Text>Quality Maintainence</Text>
        </Col>
        <Col>
          <FontAwesomeIcon size="3x" icon={faFaceGrinHearts} />
          <Text>Excellent Customer Care</Text>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesContainer;
