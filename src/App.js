import './App.css';
import UserDetails from './component/userdetails/UserDetails';
import UserList from './component/userlist/UserList';
import ResponsiveAppBar from './component/header/ResponsiveAppBar';
import {reviews} from './data'
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0)
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="user--dashbord">
        <UserDetails lengthReview={reviews.length} setIndex={setIndex} review={reviews[index]} />
        <UserList setIndex={setIndex} reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
