import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header.js";
import App from "./App.js";

describe("Test for patika.dev", () => {
  test(" Tittle render ", () => {
    render(<Header />);
    const head = screen.getByText("Emoji Search");
    expect(head).toBeInTheDocument();
  });
  test("Emoji list render ", () => {
    render(<App />);
    const items = screen.getAllByText(/Click to copy emoji/i);
    const item = screen.getByText("Relaxed");
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });
  test("Filter render ", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Search for emoji");
    userEvent.type(input, "yu");
    let item = screen.getByText("Yum");
    expect(item).toBeInTheDocument();
  });
  test("Emoji Copy ", () => {
    render(<App />);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});