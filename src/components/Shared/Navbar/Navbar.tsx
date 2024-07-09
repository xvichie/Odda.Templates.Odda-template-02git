import React from "react";
import { Button, Navbar as Nav } from "flowbite-react";
import Container from "../Container/Container";
import { FaHotel } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

import { MdBedroomParent } from "react-icons/md";


function Navbar() {
  return (
    <div className="absolute w-full z-50 left-0">
      <div className="bg-darkBackground bg-opacity-[45%] rounded-none m-0 w-full py-4">
        <Container>
          <div>
            <span className="text-white flex items-center">
              <FaLocationPin className="mr-2" />
              <h4 className="text-xs">ქობულეთი, ძმები ბოზების #4</h4>
            </span>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <Nav fluid rounded className="justify-between py-4">
            <Nav.Brand href="/">
              <FaHotel className="mr-3 h-12 w-12" />
              <span className="self-center whitespace-nowrap text-sm md:text-md font-semibold text-black">
                გიას სასტუმრო
              </span>
            </Nav.Brand>
            <Nav.Toggle className="bg-white" />
            <Nav.Collapse className="justify-center items-center lg:bg-transparent">
              <Nav.Link
                href="#"
                className="flex h-full justify-center items-center text-black hover:text-primary hover:bg-blue-900 font-semibold"
              >
                ჩვენ შესახებ
              </Nav.Link>
              <Nav.Link
                href="#"
                className="flex h-full justify-center items-center text-black hover:text-primary hover:bg-blue-900 font-semibold"
              >
                ფასები
              </Nav.Link>
              <Nav.Link
                href="#"
                className="flex h-full justify-center items-center text-black hover:text-primary hover:bg-blue-900 font-semibold"
              >
                კონტაქტი
              </Nav.Link>
              <Button className="bg-primary text-white hover:bg-red-600">დაგვიკავშირდი</Button>
            </Nav.Collapse>
          </Nav>
        </Container>
      </div>
      <div className="bg-darkBackground bg-opacity-[45%] rounded-none m-0 w-full">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="group hover:cursor-pointer h-full w-full py-4">
              <div className="flex items-center justify-center text-white 
              border-x-[1px] border-solid border-gray-400">
                <MdBedroomParent className="mr-1 group-hover:opacity-75" />
                <h4 className="group-hover:opacity-75">ოთახები</h4>
              </div>
            </div>
            <div className="group hover:cursor-pointer h-full w-full py-4">
              <div className="flex items-center justify-center text-white 
              border-r-[1px] border-solid border-gray-400">
                <MdBedroomParent className="mr-1 group-hover:opacity-75" />
                <h4 className="group-hover:opacity-75">ოთახები</h4>
              </div>
            </div>
            <div className="group hover:cursor-pointer h-full w-full py-4 hidden lg:block">
              <div className="flex items-center justify-center text-white 
              border-r-[1px] border-solid border-gray-400">
                <MdBedroomParent className="mr-1 group-hover:opacity-75" />
                <h4 className="group-hover:opacity-75">ოთახები</h4>
              </div>
            </div>
            <div className="group hover:cursor-pointer h-full w-full py-4 hidden lg:block">
              <div className="flex items-center justify-center text-white 
              border-r-[1px] border-solid border-gray-400">
                <MdBedroomParent className="mr-1 group-hover:opacity-75" />
                <h4 className="group-hover:opacity-75">ოთახები</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
