import Navbar from "../components/Navbar";
import {getSession} from "next-auth/client";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Dashboard = () => {
    return (<>
        <Navbar/>
        <Container maxWidth="md">
            <Typography component="h1" variant="h5">Your Searches</Typography>
            <Box align="center" m={4}>
                <img src="/search_list_placeholder.svg" height="200"/>
                <Typography color="textSecondary">You haven't created a search yet.</Typography>
            </Box>

        </Container>
    </>)
}


export default Dashboard
