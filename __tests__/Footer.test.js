import { render, screen, celanup } from "@testing-library/react";
import Footer from "../src/components/footer/Footer";
import "@testing-library/jest-dom/extend-expect";

test("should render Footer component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
