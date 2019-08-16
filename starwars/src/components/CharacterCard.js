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
    .hidden {
      display: none;
    }
    &:hover {
      background-color: white;
    };
    &:active {
      .hidden {
        display: block;
      }
      
    }
    `;

const CharacterCard = props => {
  
  return (    
    <Grid.Column padded="horizontally" key={props.id}>
      <CardDiv>
        <Card>
          <Card.Content>
            <Card.Header>Name: {props.name}</Card.Header>
            <Card.Meta>Birth Year: {props.birthYear}</Card.Meta>
            <Card.Description><b>Gender: </b>{props.gender}</Card.Description>
            <Card.Description><b>Eye Color: </b>{props.eyeColor}</Card.Description>
            <Card.Description><b>Hair Color: </b>{props.hairColor}</Card.Description>
            <div className = "hidden">
              <Card.Description><b>Height: </b>{props.height}</Card.Description>
              <Card.Description><b>Mass: </b>{props.mass}</Card.Description>
              <Card.Description><b>Skin Color: </b>{props.skinColor}</Card.Description>
            </div>
          </Card.Content>
        </Card>
        </CardDiv>
    </Grid.Column>     
  );
};

export default CharacterCard;