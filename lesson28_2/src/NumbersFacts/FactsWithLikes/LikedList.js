import { Stack } from "@mui/material";
import LikedItem from "./LikedItem";

export default function LikedList(props) {
  const items = props.numbers.map((num) => (
    <LikedItem
      key={num}
      number={num}
      onDelete={() => props.onDelete(num)}
      onClick={() => props.onClick(num)}
    />
  ));

  return (
    <Stack direction="row" spacing={1}>
      {items}
    </Stack>
  );
}
