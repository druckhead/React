import { Button, IconButton, Stack } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function FactWithLike(props) {

    console.log("Rendering Fact with props:", props)

    return(
        <Stack direction="row" spacing={2} alignItems='center'>
            <p style={{margin: 0}}>{props.factText}</p>
            <IconButton
                disabled={props.isLiked}
                color="primary" variant="outlined"
                onClick={() => props.onLikedNumber(Number(props.factText.split(' ')[0]))}>
                <ThumbUpAltIcon />
            </IconButton>
        </Stack>
    )
}