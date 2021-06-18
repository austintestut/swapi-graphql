import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import CharacterContainer from "./CharacterContainer";
import Header from "./Header";
import FavoritesList from "./FavoritesList";
import PageButtonContainer from "./PageButtonContainer";

const StyledAppContainer = styled.div`
  position: absolute;
  background-image: linear-gradient(to bottom, #01144d, #afb3bd);
  color: white;
  height: 100%;
  width: 100%;
`;

export const GET_CHARACTERS = gql`
  query GetPeople {
    allPeople {
      people {
        name
        birthYear
        gender
        homeworld {
          name
        }
        species {
          name
        }
      }
    }
  }
`;

const searchCharacters = (characters, query) => {
  if (!query) {
    return characters;
  }
  return characters.filter((char) => {
    const name = char.name.toLowerCase();
    return name.includes(query.toLowerCase());
  });
};

function App() {
  const [search, updateSearch] = useState("");

  let faves = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    faves.push(window.localStorage.key(i));
  }

  const [favorites, changeFavorites] = useState(faves);
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const [translatedY, changeY] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :</p>;
  }

  var people = searchCharacters(data.allPeople.people, search);
  people = people.slice().sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  });


  const handleFavoriteChange = (addOrRemove, person) => {
    let favList = favorites.slice();
    if (addOrRemove === "add") {
      favList.push(person.name);
      changeFavorites(favList);
    } else {
      favList.splice(favList.indexOf(person.name), 1);
      changeFavorites(favList);
    }
  };

  const handlePageChange = (nextOrPrevious) => {
    if (nextOrPrevious === "next") {
      changeY(translatedY - 600);
    } else {
      changeY(translatedY + 600);
    }
  };

  return (
    <StyledAppContainer className="App">
      <Header updateSearch={updateSearch} />
      <FavoritesList favorites={favorites} />
      <CharacterContainer
        people={people}
        handleFavoriteChange={handleFavoriteChange}
        favorites={favorites}
        changeFavorites={changeFavorites}
        translatedY={translatedY}
      />
      <PageButtonContainer handlePageChange={handlePageChange} people={people} translatedY={translatedY} />
    </StyledAppContainer>
  );
}

export default App;
