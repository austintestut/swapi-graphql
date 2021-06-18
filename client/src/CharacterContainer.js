import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const StyledCardContainer = styled.div`
  height: 600px;
  width: 80%;
  margin: 75px 0 0 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

function CharacterContainer({
  people,
  handleFavoriteChange,
  favorites,
  changeFavorites,
  translatedY
}) {
  return (
    <StyledCardContainer data-testid="cardContainer">
      {people.map((person) => {
        return (
          <CharacterCard
            person={person}
            key={person.name}
            handleFavoriteChange={handleFavoriteChange}
            translatedY={translatedY}
          />
        );
      })}
    </StyledCardContainer>
  );
}

export default CharacterContainer;
