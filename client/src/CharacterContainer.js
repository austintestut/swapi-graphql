import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const StyledCardContainer = styled.div`
  position: absolute;
  height: 600px;
  width: 80%;
  margin: 75px 10% 0 15%;
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
}) {
  return (
    <StyledCardContainer>
      {people.map((person) => {
        return (
          <CharacterCard
            person={person}
            key={person.name}
            handleFavoriteChange={handleFavoriteChange}
          />
        );
      })}
    </StyledCardContainer>
  );
}

export default CharacterContainer;
