import { Chip } from "@mui/material";

export default function LikedItem(props) {
  return (
    // <Chip label={props.number} color="primary" variant="outlined"/>
    <Chip
      onDelete={props.onDelete}
      onClick={props.onClick}
      label={props.number}
      text={props.text}
      color="primary"
      variant={"outlined"}
    />
  );
}
