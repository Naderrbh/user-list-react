import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './usercard.css'

const UserCard = ({review,ind,setIndex}) => {
  return (
    <Card className="user--card" sx={{ maxWidth: 345 }} onClick={()=>setIndex(ind)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={review.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {review.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {review.job}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard