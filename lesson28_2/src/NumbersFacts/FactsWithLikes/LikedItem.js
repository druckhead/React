import { Chip } from "@mui/material";

export default function LikedItem(props) {
  return (
    <Chip
      label={props.number}
      onClick={() => props.onClick(props.number, props)}
      onDelete={() => props.onDelete(props.number, props)}
      color="primary"
      variant="outlined"
    />
  );
}
