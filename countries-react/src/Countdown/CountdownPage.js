import { Box } from "@mui/system";
import { useState } from "react";
import Countdown from "./Countdown";

export default function CountdownPage() {
    const [secondsInput, setSecondsInput] = useState("")
    const [countdownStarted, setCountdownStarted] = useState(false)
  
    return (
        <Box>
            <form 
                onSubmit={(event) => {
                    event.preventDefault()
                    setCountdownStarted(true)
                }} 
            >
                <input type='text' 
                    placeholder="Insert seconds" 
                    value={secondsInput} 
                    onChange={(event) => setSecondsInput(event.target.value)}
                    disabled={countdownStarted}/>
                <button type="submit"
                        disabled={countdownStarted}>
                        Start countdown
                </button>
            </form>
            
            {countdownStarted &&
                <Countdown seconds={secondsInput}
                            onCountdownFinished={() => setCountdownStarted(false)}/>
            }
            
        </Box>
    )
  }