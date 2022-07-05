import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Usercard = ({data}) => {
  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
          alt="username"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Age: {data.age}
          </Typography>

          <Typography variant="body2" color="brown">
          Address: {data.address}
          </Typography>
         { data.voted?<Typography gutterBottom variant="h6" component="div" style={{color:"green",fontWeight:"700"}}>
            Status: Voted
          </Typography>:<Typography gutterBottom variant="h6" component="div" style={{color:"red", fontWeight:"700"}}>
            Status: Not Voted
          </Typography>}
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Usercard