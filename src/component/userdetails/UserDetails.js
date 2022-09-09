import React from 'react';
import './userdetails.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const UserDetails = ({review,setIndex,lengthReview}) => {
  return (
    <div className="container">
  <div className="row">
    <div className="card--user col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={review.image} alt="" />
        </div>
        <div className="team-content">
          <h3 className="name">{review.name}</h3>
          <h4 className="title">{review.job}</h4>
        </div>
        <h6>{review.text}</h6>
        <ArrowBackIosIcon onClick={()=> setIndex((prevIndex => prevIndex===0? lengthReview-1 : prevIndex-1))} />
        <AutorenewIcon onClick={()=> setIndex((Math.floor(Math.random()*lengthReview)))} />
        <ArrowForwardIosIcon onClick={()=> setIndex((nextIndex => nextIndex===lengthReview-1? 0 : nextIndex+1))} />
      </div>
      
    </div>
    
    </div>
  </div>

  )
}

export default UserDetails