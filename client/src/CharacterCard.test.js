import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import App from "./App";
import CharacterContainer from "./CharacterContainer";
import CharacterCard from "./CharacterCard";

test("clicking a star adds a character's name to local storage", () => {
  render(<MockedProvider />);
  render(<App />);
  render(<CharacterContainer />);
  render(<CharacterCard />);
  fireEvent.click(screen.getByAltText("favorite star"));
  expect(window.localStorage.length).toEqual(1);
});
