import { render, screen, celanup } from "@testing-library/react";
import Button from "./Button";

test("should render Button component", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});
