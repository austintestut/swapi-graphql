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
  transform: translateY(${(props) => props.translatedY}px);
`;

const StyledStar = styled.img`
  height: 40px;
  width: 40px;
  float: right;
  &:hover {
    cursor: pointer;
    filter: invert(0.3);
  }
`;

const StyledName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const StyledInfoContainer = styled.div`
  margin-top: 20px;
  border-top: 2px solid;
`;

const StyledCategory = styled.span`
  font-weight: 600;
  font-style: bold;
  font-size: 18px;
  margin-top: 20px;
`;

function CharacterCard({
  person,
  handleFavoriteChange,
  favorites,
  changeFavorites,
  translatedY,
}) {
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
            handleFavoriteChange("add", person);
          } else {
            window.localStorage.removeItem(person.name);
            handleFavoriteChange("remove", person);
          }
          toggleFavorited(!isFavorited);
        }}
      />
      <StyledName>{person.name}</StyledName>
      <StyledInfoContainer>
        <p>
          <StyledCategory>Birth Year: </StyledCategory>
          <span>{person.birthYear}</span>
        </p>
        <p>
          <StyledCategory>Gender: </StyledCategory>
          <span>{person.gender}</span>
        </p>
        <p>
          <StyledCategory>Home World: </StyledCategory>
          <span>
            {person.homeworld === null ? "unknown" : person.homeworld.name}
          </span>
        </p>
        <p>
          <StyledCategory>Species: </StyledCategory>
          <span>
            {person.species === null ? "unknown" : person.species.name}
          </span>
        </p>
      </StyledInfoContainer>
    </StyledCard>
  );
}

export default CharacterCard;
