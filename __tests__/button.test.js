import { render, screen, celanup } from "@testing-library/react";
import Button from "../src/components/button/Button";
import "@testing-library/jest-dom/extend-expect";

test("should render Button component", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});
