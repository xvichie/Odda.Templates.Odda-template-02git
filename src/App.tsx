import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flowbite } from "flowbite-react";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <Flowbite>
      <div className="font-mtavvruli">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    </Flowbite>
  );
}

export default App;
