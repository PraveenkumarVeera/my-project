import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => navigate('/s3')}>S3 Bucket</button>
      <button onClick={() => navigate('/dynamo')}>Dynamo DB</button>                                                                                                                                                                                          
    </div>
  )
}

export default Home