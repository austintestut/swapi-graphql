import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App, { GET_CHARACTERS } from "./App";
import CharacterContainer from "./CharacterContainer";
import CharacterCard from "./CharacterCard";

const client = new ApolloClient({
  uri: "http://localhost:8080",
  cache: new InMemoryCache(),
});

test("renders children in card container", async () => {
  render(
    <ApolloProvider client={client}>
      <App>
        <CharacterContainer>
          <CharacterCard />
        </CharacterContainer>
      </App>
    </ApolloProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 100));
  const container = screen.getByTestId("cardContainer");
  expect(container).toBeDefined();
  expect(container.children.length).toBeGreaterThan(0);
});
