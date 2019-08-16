import React from "react";
import CharacterCard from "./CharacterCard";
import { Container as SemanticContainer } from "semantic-ui-react";

export default function CharacterList(props) {
  
  return (
    <SemanticContainer>
          {props.data.map(props => {
            return (
              <CharacterCard
                key={props.name}
                id={props.name}
                name={props.name}
                birthYear={props.birth_year}
                homeworld={props.homeworld}
                films ={props.films}
                gender={props.gender}
                height={props.height}
                hairColor={props.hair_color}
              />
            );
            
          })}
    </SemanticContainer>
  );
}