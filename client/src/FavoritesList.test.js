import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import FavoritesList from "./FavoritesList";

const client = new ApolloClient({
  uri: "http://localhost:8080",
  cache: new InMemoryCache(),
});

test("should have as many list items as characters in local storage", async() => {
  render(
    <ApolloProvider client={client}>
      <App>
        <FavoritesList />
      </App>
    </ApolloProvider>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const fave = screen.getByTestId("favorites");
  expect(fave.children.length).toBe(window.localStorage.length);
});
