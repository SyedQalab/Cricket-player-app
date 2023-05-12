import { useState, FC, useMemo } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { PlayerProps } from "./playerTypes";
import { PlayersList } from "./PlayersList";

interface Props {}

export const Player: FC<Props> = () => {
  const [playersList, setPlayersList] = useState<PlayerProps[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [team, setTeam] = useState("");

  // Adds new player to the players list
  const handlePlayerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlayersList((prevPlayersList) => [
      ...prevPlayersList,
      { name, age: parseInt(age), team },
    ]);
    setName("");
    setAge("");
    setTeam("");
  };

  // memorized list to avoid unnecessary renders of PlayersList
  const playersListMemo = useMemo(() => playersList, [playersList]);

  return (
    <Box sx={{ margin: "5% 10%" }}>
      <Typography variant="h4">Add a Player:</Typography>

      {/* Form to add a player */}
      <form onSubmit={handlePlayerSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="Age"
          fullWidth
          margin="normal"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
        />
        <TextField
          label="Team"
          fullWidth
          margin="normal"
          onChange={(e) => setTeam(e.target.value)}
          value={team}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      {/* Displays list of players */}
      <PlayersList list={playersListMemo} setList={setPlayersList} />
    </Box>
  );
};
