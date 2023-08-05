import { render, screen } from "@testing-library/react";
import MyApp from "./App";

test("renders Welcome", () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
