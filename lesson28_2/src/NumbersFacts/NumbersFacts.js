import { Box, Button, LinearProgress, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Fact from "./Fact";

export default function NumbersFacts(props) {



    const [currFactText, setCurrFactText] = useState(null)
    const [loading, setLoading] = useState(false)

    console.log("Rendering NumbersFacts with loading", loading)

    // const [loading2, setLoading2] = useState(false)

    // never update state inside render!!!!!
    // if (currFactText && currFactText.length > 10) {
    //     setCurrFactText(currFactText + 'aaa')
    // }
   


    const getFact = () => {
        console.log("setting loading to true")
        setLoading(true)  // react remembers to re-render
        // fetch('http://numbersapi.com/random/math')
        // .then(response => response.json())
        // .then(json => console.log(json))


        axios.get('http://numbersapi.com/random/math') // send request in a different thread and let me know when is ready
        .then((responseData) => {
            console.log('Received a new fact:', responseData)
            console.log('setting loading to false')
            setLoading(false)
            setCurrFactText(responseData.data)
        })
        .catch(error => console.log(error))
        console.log("ended getFact function")
    }

    return(
        <Box
            sx={{
                width: '50%',
                margin: 'auto',
                marginTop: '1em'
            }}
        >

            <h5 align="center">
                Welcome to Numbers Facts!
            </h5>


            <Stack spacing={2} marginY='2rem'>
                <Button variant="contained" onClick={getFact}>GET INTERESTING FACT!</Button>
            </Stack>

            {loading &&
                <LinearProgress />
            }

            {/* {loading2 &&
                <LinearProgress />
            } */}

            {! loading && currFactText &&
                <Fact factText={currFactText}/>
            }
        </Box>
    )
}