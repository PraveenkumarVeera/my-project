import React from 'react'
import { useAuth } from "react-oidc-context";
import UploadImageS3 from './AwsS3';
import Home from './Home';


function SignIn() {
    const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "2o7nam0a63j524hbhejqss1ke";
    const logoutUri = "http://localhost:3000";
    const cognitoDomain = "https://eu-north-1saxamizdb.auth.eu-north-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };


  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

   if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

if(!auth.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to the App</h1>
        <button onClick={() => auth.signinRedirect()}>Sign In</button>
      </div>
    );
  }
if (auth.isAuthenticated) {
    return (
      <div>
        <Home />
        <button onClick={() => {auth.removeUser()}}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Log out</button>
    </div>
  );
 
}

export default SignIn