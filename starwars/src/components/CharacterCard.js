import React from "react";
import { Card, Grid } from "semantic-ui-react";
import styled from "styled-components";

const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid black;
    justify-content: center;
    background-color: gray;
    &:hover {
      background-color: white;
    }
    `;

const CharacterCard = props => {
  
  return (    
    <Grid.Column padded key={props.id}>
      <CardDiv>
        <Card>
          <Card.Content>
            <Card.Header>Name: {props.name}</Card.Header>
            <Card.Meta>Birth Year: {props.birthYear}</Card.Meta>
            <Card.Description><b>Gender: </b>{props.gender}</Card.Description>
            <Card.Description><b>Height: </b>{props.height}</Card.Description>
            <Card.Description><b>Hair Color: </b>{props.hairColor}</Card.Description>
          </Card.Content>
        </Card>
        </CardDiv>
    </Grid.Column>     
  );
};

export default CharacterCard;