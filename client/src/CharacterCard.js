import React, { useState } from "react";
import styled from "styled-components";
import emptyStar from "./assets/empty_star.png";
import fullStar from "./assets/full_star.png";

const StyledCard = styled.div`
  position: relative;
  height: 266px;
  border: 2px solid;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  transition: transform 0.35s;
  transform: translateY(${props => props.translatedY}px);
`;

const StyledStar = styled.img`
  height: 50px;
  width: 50px;
  float: right;
  &:hover {
    cursor: pointer;
    filter: invert(0.3);
  }
`;

function CharacterCard({ person, handleFavoriteChange, favorites, changeFavorites, translatedY }) {
  const [isFavorited, toggleFavorited] = useState(false);
  if (!isFavorited && window.localStorage[person.name]) {
    toggleFavorited(true);
  }
  return (
    <StyledCard translatedY={translatedY}>
      <StyledStar
        alt="favorite star"
        src={
          isFavorited || window.localStorage[person.name] ? fullStar : emptyStar
        }
        onClick={() => {
          if (!isFavorited) {
            window.localStorage.setItem(person.name, person.name);
            handleFavoriteChange('add', person);
          } else {
            window.localStorage.removeItem(person.name);
            handleFavoriteChange('remove', person);
          }
          toggleFavorited(!isFavorited);
        }}
      />
      <p>Name: {person.name}</p>
      <p>Birth Year: {person.birthYear}</p>
      <p>Gender: {person.gender}</p>
      <p>
        Home World:{" "}
        {person.homeworld === null ? "UNKNOWN" : person.homeworld.name}
      </p>
      <p>
        Species: {person.species === null ? "UNKNOWN" : person.species.name}
      </p>
      <br />
    </StyledCard>
  );
}

export default CharacterCard;
