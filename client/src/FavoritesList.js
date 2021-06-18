import styled from "styled-components";

const StyledFavoritesList = styled.div`
  border: 1px solid;
  width: 15%;
  height: auto;
  max-height: 665px;
  position: absolute;
  border-radius: 5px;
`;

const StyledHeader = styled.div`
  position: fixed;
  display: block;
`;

const StyledTitle = styled.span`
  font-weight: 600;
  margin: auto;
  width: 100%;
  padding: 5px;
`;

const StyledListContainer = styled.div`
  max-height: 632px;
  margin-top: 30px;
  overflow-y: auto;
`;

const FavoritesList = ({ favorites }) => {
  return (
    <StyledFavoritesList >
      <StyledHeader>
        <StyledTitle>Favorites</StyledTitle>
      </StyledHeader>
      <StyledListContainer>
        <ul data-testid="favorites">
          {favorites.length === 0
            ? "None"
            : favorites.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </StyledListContainer>
    </StyledFavoritesList>
  );
};

export default FavoritesList;
