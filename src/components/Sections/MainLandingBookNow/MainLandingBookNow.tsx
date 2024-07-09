import React from "react";
import Container from "../../Shared/Container/Container";
import { Button, Datepicker, Select, TextInput } from "flowbite-react";

import { IoPerson } from "react-icons/io5";
import { FaChild } from "react-icons/fa";

function MainLandingBookNow() {
  return (
    <div className="py-8 bg-lightBackground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <div className="flex flex-col justify-between">
              <Datepicker minDate={new Date()} className="z-[60]" />
            </div>
            <div className="flex flex-col justify-between">
              <Datepicker minDate={new Date()} className="z-[60]" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div className="flex flex-col justify-between w-full">
              <div className="grid grid-cols-1 gap-3">
                <Select id="countries" required className="w-full">
                  <option>ზღვისპირა კოტეჯი</option>
                  <option>მთის კოტეჯი</option>
                  <option>ოროთახიანი კოტეჯი</option>
                </Select>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-1">
                {/* <Tooltip content="ზრდასრულების რაოდენობა"> */}
                <TextInput
                  id="adults"
                  type="number"
                  min={0}
                  icon={IoPerson}
                  placeholder="ზრდასრულები"
                  required
                />
                {/* </Tooltip> */}
                {/* <Tooltip content="ბავშვების რაოდენობა"> */}
                <TextInput
                  id="adults"
                  type="number"
                  min={0}
                  icon={FaChild}
                  placeholder="ბავშვები"
                  required
                />
                {/* </Tooltip> */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Button className="w-full h-full bg-primary">
                დაჯავშნა
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainLandingBookNow;
