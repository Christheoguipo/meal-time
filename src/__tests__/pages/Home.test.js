import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home renders correctly", () => {
  test("renders login and signup button", () => {
    render(<Home />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    const signupButton = screen.getByRole("button", {
      name: /signup/i,
    });
    expect(loginButton).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });
});
