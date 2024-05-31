import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";

describe("Login page renders correctly", () => {
  test("renders username and password textboxes", () => {
    render(<Login />);
    const usernameTextbox = screen.getByRole("textbox", { name: /username:/i });
    const passwordTextbox = screen.getByLabelText(/password:/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(usernameTextbox).toBeInTheDocument();
    expect(passwordTextbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
