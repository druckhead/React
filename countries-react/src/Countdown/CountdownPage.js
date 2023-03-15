import { Box } from "@mui/system";
import { useState } from "react";
import Countdown from "./Countdown";

export default function CountdownPage({ onSecondsSubmitted, timeLeft }) {
  const [secondsInput, setSecondsInput] = useState("");
  return (
    <Box>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSecondsSubmitted(secondsInput);
        }}
      >
        <input
          type="text"
          placeholder="Insert seconds"
          value={secondsInput}
          onChange={event => setSecondsInput(event.target.value)}
          disabled={timeLeft > 0}
        />
        <button type="submit" disabled={timeLeft > 0}>
          Start countdown
        </button>
      </form>

      {timeLeft > 0 && <Countdown timeLeft={timeLeft} />}
    </Box>
  );
}
