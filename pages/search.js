import Navbar from "../components/Navbar";
import {getSession} from "next-auth/client";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import SocialAccountsPanel from "../components/SettingsPanels/SocialAccountsPanel";

const Dashboard = () => {
    const [isFocused, toggleFocused] = useState(false)
    return (<div >
        <Navbar/>
        <Container maxWidth="md">
            <Typography component="h1" variant="h6">Create a new search</Typography>
            <Box align="center" pt={3}>
                <Paper style={{backgroundColor: "white"}} elevation={isFocused ? 4 : 2}>
                    <Box p={3}>
                        <input onFocus={() => toggleFocused(true)} onBlur={() => toggleFocused(false)} placeholder="New search name" className="w-full text-lg focus:outline-none"/>
                    </Box>
                </Paper>
                <div className="w-full flex justify-end mt-6">
                    <Button variant="contained" size="large" color="primary" className="focus:outline-none">
                        Create Search
                    </Button>
                </div>
                <div className="mt-6">

                </div>

            </Box>

        </Container>
    </div>)
}


export default Dashboard
