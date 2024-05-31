import { render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar";

describe("NavBar renders correctly", () => {
  test("renders recipe and settings button", () => {
    render(<NavBar />);
    const recipeButton = screen.getByRole("button", {
      name: /recipes/i,
    });
    const settingsButton = screen.getByRole("button", {
      name: /settings-icon/i,
    });
    expect(recipeButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });
});
