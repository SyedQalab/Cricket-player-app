import { render, screen, fireEvent } from "@testing-library/react";
import { PlayersList } from "./PlayersList";
import "@testing-library/jest-dom";

describe("PlayersList component", () => {
  const mockList = [
    { name: "John", age: 25, team: "A" },
    { name: "Jane", age: 30, team: "B" },
  ];

  test("renders a list of players", () => {
    render(<PlayersList list={mockList} setList={() => {}} />);

    // Check if the players' names and details are displayed
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("25 - A")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("30 - B")).toBeInTheDocument();
  });

  test("deletes a player when delete button is clicked", () => {
    const mockSetList = jest.fn();
    render(<PlayersList list={mockList} setList={mockSetList} />);

    // Find the delete button for the first player and click it
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    // Check if the setList function is called with the updated list
    expect(mockSetList).toHaveBeenCalledWith([
      { name: "Jane", age: 30, team: "B" },
    ]);
  });
});
