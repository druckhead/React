import { IconButton, Stack } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export default function FactWithLike(props) {
  console.log("Rendering Fact with props:", props);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <p style={{ margin: 0 }}>{props.factText}</p>
      <IconButton
        disabled={props.isLastNumber}
        color="primary"
        variant="outlined"
        onClick={() => {
          console.log("inside onClick in LikeButton");
          const num = Number(props.factText.split(" ")[0]);
          console.log("calling props.onLikedNumber with ", num);
          props.onLikedNumber(num);
        }}
      >
        <ThumbUpAltIcon />
      </IconButton>
    </Stack>
  );
}
