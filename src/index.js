import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_SAxAmizDb",
  client_id: "2o7nam0a63j524hbhejqss1ke",
  redirect_uri: "https://4b30dea70d05.ngrok-free.app",
  response_type: "code",
  scope: "phone openid email",
};

// const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
