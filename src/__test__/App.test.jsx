import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import test from "jest";
import App from "../App";

test("renders the app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/movie explorer/i);
  expect(titleElement).toBeInTheDocument();
});
