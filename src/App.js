import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import AwsS3 from "./Components/AwsS3";
import Dynamodb from "./Components/Dynamodb";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dynamo" element={<Dynamodb />} />
        <Route path="/s3" element={<AwsS3 />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
