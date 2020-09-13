import Navbar from "../components/Navbar";
import {getSession} from "next-auth/client";
import {Container, Hidden} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {useState} from "react";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";


const Dashboard = () => {
    const [isFocused, toggleFocused] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [creationMode, setCreationMode] = useState(true)
    const [instagramSources, setInstaSources] = useState([])

    return (<div >
        <Navbar/>
        <Container maxWidth="md">
            <Typography component="h1" variant="h6">Create a new search</Typography>
            <Box align="center" pt={3}>
                <Paper style={{backgroundColor: "white"}} elevation={isFocused ? 3 : 1}>
                    <Box p={2}>
                        <input onChange={event => setNewTitle(event.target.value)} value={newTitle} onFocus={() => toggleFocused(true)} onBlur={() => toggleFocused(false)} placeholder="New search name" className="w-full text-lg focus:outline-none"/>
                    </Box>
                </Paper>
            </Box>
            {creationMode ? <div>
                <Typography component="h1" variant="h6" className="pt-12">Add sources</Typography>
                <div className="mt-4">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="flex justify-between">
                                <Typography><i className="fab fa-instagram mr-2"/>Instagram</Typography>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex-row md:flex py-2">
                                <div className="w-full">
                                    <form className="w-full flex justify-between items-baseline" onSubmit={event => {
                                        event.preventDefault();
                                        if (event.target['new-insta-source'].value.length < 1) {
                                            return
                                        }
                                        setInstaSources([...instagramSources, event.target['new-insta-source'].value])
                                        event.target.reset();
                                        event.target.focus();
                                    }}>
                                        <TextField type="text" autoComplete="off" label="Instagram Username (@username)" id="new-insta-source" variant="standard" className="w-full"/>
                                        <Button className="w-6 pl-2" color="primary" type="submit">Add</Button>
                                    </form>
                                    <ul className="mt-2 space-y-1">
                                        {instagramSources.map((source, index) => <li key={source} className="inline-block pr-1">
                                            <Chip
                                                variant="outlined"
                                                label={source}
                                                onDelete={() => setInstaSources(prevState => prevState.filter((chip, i) => i !== index))}
                                            />
                                        </li>)}

                                    </ul>
                                </div>


                                <div className="w-full md:w-1/3 md:ml-4 md:pl-4 mt-2 md:mt-0 md:border-l border-gray-300">
                                    <Typography>
                                        If you add an user that is private, you must be following them with your provided account to receive data.
                                    </Typography>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>



            </div> : null}


            <div className="w-full flex justify-end mt-6">

                <Button disabled={newTitle.length < 1} variant="contained" size="large" color="primary" className="focus:outline-none" onClick={() => setCreationMode(true)}>
                    {creationMode ? "Create Search" : "Next"}
                </Button>

            </div>
        </Container>
    </div>)
}


export default Dashboard
