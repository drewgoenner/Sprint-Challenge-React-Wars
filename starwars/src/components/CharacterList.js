import React from "react";
import CharacterCard from "./CharacterCard";
import { Grid, Container } from "semantic-ui-react";

export default function CharacterList(props) {
  
  return (
    <Container>
      <Grid relaxed columns={3} divided ="vertically">
        <Grid.Row padded="vertically" columns ={3}>
          {props.data.map(props => {
            return (
              <CharacterCard
                key={props.url}
                id={props.name}
                name={props.name}
                birthYear={props.birth_year}
                gender={props.gender}
                height={props.height}
                hairColor={props.hair_color}
                mass={props.mass}
                skinColor={props.skin_color}
                eyeColor={props.eye_color}
              />
            );          
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}