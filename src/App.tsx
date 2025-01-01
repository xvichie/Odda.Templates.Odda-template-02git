import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flowbite } from "flowbite-react";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Shared/Footer/Footer";
import TallyTemplate from "./components/TallyTemplate";

function App() {
  return (
    <Flowbite>
      <div className="font-mtavvruli">
        <TallyTemplate></TallyTemplate>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Flowbite>
  );
}

export default App;
