import { FC, Fragment } from "react";
import { List, ListItem, ListItemText, Typography, Button, Divider } from "@mui/material";
import { PlayerProps } from "./playerTypes";

export interface PlayersListProps {
  list: PlayerProps[];
  setList: (list: PlayerProps[]) => void;
}

export const PlayersList: FC<PlayersListProps> = ({ list, setList }) => {

  //Deletes existing player from the list
  const onDeletePlayer = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <List sx={{ bgcolor: "#f5f5f5", p: 3, borderRadius: 2, mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Players List:
      </Typography>
      {list.map((player, index) => (
        <Fragment key={index}>
          <ListItem sx={{ bgcolor: "white" }}>
            <ListItemText
              primary={player.name}
              secondary={`${player.age} - ${player.team}`}
            />
            <Button onClick={() => onDeletePlayer(index)}>Delete</Button>
          </ListItem>
          {index !== list.length - 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
};
