import React, {useState} from 'react';
import "./team.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: white;
  margin: 20px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
`;

const Text = styled.p`
margin-top: 25px;
  font-size: 0.8em;
  font-weight: bold;
  color: gray;
`;

function MemberCard(props) {

  return (
    <Card>
      <FontAwesomeIcon style={{marginTop: "60px"}} size="4x" color="gray" icon={props.icon}/>
      <Text>{props.name}</Text>
    </Card>
  );
}

export default MemberCard;
