import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("renders the home page with the correct title", () => {
    render(<Home />);
    expect(
      screen.getByText("Welcome to the Role-Playing Game")
    ).toBeInTheDocument();
  });
});
