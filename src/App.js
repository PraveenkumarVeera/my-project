import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import Setting from './Components/Setting'
import Cart from "./Components/Cart";
// const LazySetting = React.lazy(() => import("./Components/Setting"));

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route
    //       path="setting"
    //       element={
    //         <React.Suspense fallback={<div>Loading...</div>}>
    //           <LazySetting />
    //         </React.Suspense>
    //       }
    //     />

    //     {/* <Route path='setting' element={<Setting />} /> */}

    //     <Route path="cart" element={<Cart />} />
    //   </Routes>
    // </BrowserRouter>
    <Cart/>
  );
}
export default App;
