import { useState } from "react";
import styled from "styled-components";

const StyledFavoritesList = styled.div`
  border: 1px solid;
  min-width: 5%;
  max-width: 15%;
  height: auto;
  max-height: 400px;
`;

const StyledHeader = styled.div`
  position: fixed;
  display: block;
  background-color: white;
`;

const StyledTitle = styled.span`
  font-weight: 600;
  margin: auto;
  width: 100%;
`;

const StyledListContainer = styled.div`
  max-height: 300px;
  margin-top: 30px;
  overflow-y: auto;
`;

const FavoritesList = ({ favorites }) => {
  return (
    <StyledFavoritesList>
      <StyledHeader>
        <StyledTitle>Favorites</StyledTitle>
      </StyledHeader>
      <StyledListContainer>
        <ul>
          {favorites.length === 0
            ? "None"
            : favorites.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </StyledListContainer>
    </StyledFavoritesList>
  );
};

export default FavoritesList;
