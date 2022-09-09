import React from 'react'
import UserCard from '../usercard/UserCard'

const UserList = ({reviews,setIndex}) => {
  return (
    <div className="user--list">
        {reviews.map((review,i) => <UserCard setIndex={setIndex} ind={i} review={review} key={review.id} />)}
    </div>
  )
}

export default UserList