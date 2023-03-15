import { Box } from "@mui/system";
import Countdown from "./Countdown";

export default function CountdownPage({
  secondsInput,
  setSecondsInput,
  countdownStarted,
  setCountdownStarted,
}) {
  return (
    <Box>
      <form
        onSubmit={event => {
          event.preventDefault();
          setCountdownStarted(true);
        }}
      >
        <input
          type="text"
          placeholder="Insert seconds"
          value={secondsInput}
          onChange={event => setSecondsInput(event.target.value)}
          disabled={countdownStarted}
        />
        <button type="submit" disabled={countdownStarted}>
          Start countdown
        </button>
      </form>

      {countdownStarted && (
        <Countdown
          seconds={secondsInput}
          onCountdownFinished={() => setCountdownStarted(false)}
        />
      )}
    </Box>
  );
}
