import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Parties from './Parties'


const ElectionParties = ({validateUser}) => {
    
    

    return (
        <Container maxWidth={'xl'}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">Election Parties</Typography>
                </Grid>
                <Grid item container spacing={2} xs={12}>
                    <Grid item xs={6} sm={5}md={3}><Parties  validateUser={validateUser}partyName={"bjp"} imgURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/800px-Bharatiya_Janata_Party_logo.svg.png"}/></Grid>
                    <Grid item xs={6} sm={5} md={3}><Parties validateUser={validateUser}partyName={"congress"} imgURL={"https://cnskashmir.in/wp-content/uploads/2020/10/INC.jpg"}/></Grid>
                    <Grid item xs={6} sm={5} md={3}><Parties validateUser={validateUser}partyName={"shivsena"} imgURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/1200px-Logo_of_Shiv_Sena.svg.png"}/></Grid>
                    <Grid item xs={6} sm={5} md={3}><Parties validateUser={validateUser}partyName={"bsp"} imgURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/800px-Elephant_Bahujan_Samaj_Party.svg.png"} /></Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ElectionParties