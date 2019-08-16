import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid black;
    margin: 10px;
    justify-content: center;
    width: 20%;
    background-color: gray;
    &:hover {
      background-color: white;
    }
    `;

const CharacterCard = props => {
  return (       
      <CardDiv>
        <Card>
          <Card.Content>
            <Card.Header>Name: {props.name}</Card.Header>
            <Card.Meta>Birth Year: {props.birthYear}</Card.Meta>
            <Card.Description>Gender: {props.gender}</Card.Description>
            <Card.Description>Height: {props.height}</Card.Description>
            <Card.Description>Hair Color: {props.hairColor}</Card.Description>
          </Card.Content>
        </Card>
      </CardDiv>     
  );
};

export default CharacterCard;