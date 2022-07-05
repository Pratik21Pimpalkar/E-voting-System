import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Parties = ({ partyName, imgURL, validateUser }) => {
    const [state, setState] = useContext(UserContext);

    const submitVote = async () => {
        const { data } = await axios.post(`${process.env.REACT_APP_API}/vote`, { partyname: partyName }, {
            headers: {
                "authorization": `Bearer ${state.token}`
            }
        })
        validateUser();
        toast.success("Voted Successfully")
    }


    return (
        <div>
            <Card maxwidth={233}  >
                <CardActionArea >
                    <CardMedia component="img" image={imgURL} alt="username" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" align='center' style={{ textTransform: "uppercase" }} component="div">
                            {partyName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {(state.user.voted) ? <Button variant='contained' disabled style={{ background: "#581818", color: "white", width: "100%" }}>Already Voted</Button> :
                    <Button variant='contained' onClick={submitVote} style={{ background: "#581818", color: "white", width: "100%" }}>Vote Here</Button>}
            </Card>
            <ToastContainer position="top-center" theme={"dark"} autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
        </div>
    )
}

export default Parties