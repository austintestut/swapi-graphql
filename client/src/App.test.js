import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";

test("renders loading screen before Apollo request returns", () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  expect(screen.getByText("Loading...")).toBeDefined();
});
