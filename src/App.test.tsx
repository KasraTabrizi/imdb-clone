import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders main app", async () => {
  render(<App />);
  //We make the two buttons are displayed
  expect(screen.getByText(/Playing now/i)).toBeInTheDocument();
  expect(screen.getByText(/Trending/i)).toBeInTheDocument();

  //We do a test search
  const input = screen.getByPlaceholderText("Search for a movie...");
  const searchButton = screen.getByText("Search");
  fireEvent.change(input, { target: { value: "matrix" } });
  fireEvent.click(searchButton);
  //Wait for the results
  await waitFor(() => screen.findByText("Search Results"));

  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  expect(
    screen.getAllByRole("heading", { name: "Search Results" }).length
  ).toBeGreaterThanOrEqual(1);
});
