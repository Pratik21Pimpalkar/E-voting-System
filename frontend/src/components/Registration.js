import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { Button, Container, Grid, Typography } from '@mui/material';

const Registration = ({ handleToggle }) => {
  const [userdata, setUserData] = useState({ name: "", password: "", cpassword: "", age: "", address: "" })
  const HandleInputs = (e) => {
    let key, value;
    key = e.target.name;
    value = e.target.value;
    setUserData({ ...userdata, [key]: value })
  }
  const SubmitUserdata = async () => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_API}/register`, userdata)
      setUserData({ name: "", password: "", cpassword: "", age: "", address: "" })
    } catch (error) {
      console.log(error.response.data);
    }


  }
  return (
    <Container maxWidth={'sm'}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' align="center" > Register Here</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="User Name" variant="filled" name="name" value={userdata.name} onChange={HandleInputs} fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Password" variant="filled" name="password" value={userdata.password} onChange={HandleInputs} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Confirm Password" variant="filled" name='cpassword' value={userdata.cpassword} onChange={HandleInputs} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Age" variant="filled" name="age" value={userdata.age} onChange={HandleInputs} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" variant="filled" name="address" value={userdata.address} onChange={HandleInputs} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant='outlined' onClick={SubmitUserdata}>Register</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption' style={{ cursor: "pointer" }} onClick={handleToggle}>Already Registered? Login here!</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Registration