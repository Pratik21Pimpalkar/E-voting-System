import { Container, Grid } from '@mui/material'
import React, { useEffect, useContext, useState } from 'react'
import ElectionParties from '../components/ElectionParties'
import Usercard from '../components/Usercard'
import axios from 'axios'
import { UserContext } from '../Context'

const VotingPage = () => {
  const [state, setState] = useContext(UserContext);
  const [data, setData] = useState(false);
  const validateUser = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/current-user`, {
      headers: {
        "authorization": `Bearer ${state.token}`
      }
    })
    setData(data.user)
    setState(data)
  }

  useEffect(() => {
    if (state && state.token) validateUser();
  }, [state && state.token])


  return (

    <Container maxWidth={'xl'}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={9} md={3}>
          <Usercard data={data} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ElectionParties validateUser={validateUser}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default VotingPage