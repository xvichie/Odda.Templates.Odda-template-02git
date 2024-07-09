import React, { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./screens/Home/Home";
import Contact from "./screens/Contact/Contact";
import About from "./screens/About/About";
import Prices from "./screens/Prices/Prices";
import ViewRoom from "./components/Views/ViewRoom/ViewRoom";


function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />}></Route>
        <Route index={true} path="/contact" element={<Contact />}></Route>
        <Route index={true} path="/about" element={<About />}></Route>
        <Route index={true} path="/prices" element={<Prices />}></Route>
        <Route index={true} path="/room" element={<ViewRoom />}></Route>
        {/* <Route index={true} path="*" element={<Error404 />}></Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
