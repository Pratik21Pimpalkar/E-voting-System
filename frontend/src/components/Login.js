import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { UserContext } from '../Context/index'

const Login = ({ handleToggle }) => {
    const [userdata, setUserData] = useState({ name: "", password: "" })
    const [state, setState] = useContext(UserContext)
    const HandleInputs = (e) => {
        let key, value;
        key = e.target.name;
        value = e.target.value;
        setUserData({ ...userdata, [key]: value })
    }
    const SubmitUserdata = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, userdata)
            setUserData({ name: "", password: "" })
            setState({
                user: data.user,
                token: data.token
            })
            window.localStorage.setItem('auth', JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return (
        <Container maxWidth={'sm'}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' align="center" > Login Here</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="filled-basic" label="User Name" name="name" onChange={HandleInputs} variant="filled" fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <TextField id="filled-basic" label="Password" name="password" onChange={HandleInputs} variant="filled" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='outlined' onClick={SubmitUserdata}>Login</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='caption' style={{ cursor: "pointer" }} onClick={handleToggle}>Don't have an account? Registered here!</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login