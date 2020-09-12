import Navbar from "../components/Navbar";
import {getSession} from "next-auth/client";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Dashboard = () => {
    return (<>
        <Navbar/>
        <Container maxWidth="md">
            <Typography component="h1" variant="h5">Your Searches</Typography>
        </Container>
    </>)
}


export default Dashboard
