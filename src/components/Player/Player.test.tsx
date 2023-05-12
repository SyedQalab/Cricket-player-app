import { render, screen } from "@testing-library/react";
import { Player } from "./Player";
import { PlayersList } from "./PlayersList";
import "@testing-library/jest-dom";

describe("Player tests", () => {
  test("renders correctly", () => {
    render(<Player />);
    expect(screen.getByText("Add a Player:")).toBeInTheDocument;
  });

  test("displays correct list of players", () => {
    const list = [
      {
        name: "Name A",
        age: 50,
        team: "team A",
      },
    ];
    render(<PlayersList list={list} setList={() => {}} />);
    expect(screen.getByText(list[0].name)).toBeInTheDocument;
    expect(screen.getByText(`${list[0].age} - ${list[0].team}`)).toBeInTheDocument;
  });
});
