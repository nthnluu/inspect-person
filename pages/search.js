import Navbar from "../components/Navbar";
import {getSession} from "next-auth/client";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {useState} from "react";

const Dashboard = () => {
    const [isFocused, toggleFocused] = useState(false)
    return (<div >
        <Navbar/>
        <Container maxWidth="md">
            <Typography component="h1" variant="h5">Create a new search</Typography>
            <Box align="center" pt={6}>
                <Paper style={{backgroundColor: "white"}} elevation={isFocused ? 3 : 1}>
                    <Box p={4}>
                        <input onFocus={() => toggleFocused(true)} onBlur={() => toggleFocused(false)}/>
                    </Box>
                </Paper>
            </Box>

        </Container>
    </div>)
}


export default Dashboard
