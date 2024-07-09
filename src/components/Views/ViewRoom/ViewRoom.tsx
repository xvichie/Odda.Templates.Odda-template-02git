import { Button, Datepicker, Select, TextInput } from "flowbite-react";
import React from "react";
import { FaBed } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Container from "../../Shared/Container/Container";

function ViewRoom() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative">
          <img
            src="/images/backgrounds/background-06.jpg"
            alt="background-06.jpg"
            className="w-screen h-[50vh] lg:h-[vh] brightness-75 object-cover"
          />
          <div className="w-full absolute bottom-4">
            <Container>
              <h1 className="text-4xl font-bold text-white">ოთახი</h1>
            </Container>
          </div>
        </div>
      </div>
      <div className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-16">
            <div className="flex flex-col gap-4 lg:col-span-4">
              <div>
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-xl"
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-md"
                />
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-md"
                />
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-md"
                />
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-md"
                />
                <img
                  src="/images/rooms/room-01.jpg"
                  alt="cottage-01"
                  className="rounded-md"
                />
              </div>
              <div className="grid grid-cols-4 lg:flex lg:justify-between">
                <div className="flex items-center gap-1 justify-center lg:justify-normal">
                  <FaBed className="text-gray-700 h-8 w-8"></FaBed>
                  <div className="text-gray-700">: {5}</div>
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-normal">
                  <FaBed className="text-gray-700 h-8 w-8"></FaBed>
                  <div className="text-gray-700">: {5}</div>
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-normal">
                  <FaBed className="text-gray-700 h-8 w-8"></FaBed>
                  <div className="text-gray-700">: {5}</div>
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-normal">
                  <FaBed className="text-gray-700 h-8 w-8"></FaBed>
                  <div className="text-gray-700">: {5}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <h1 className="text-primary text-center font-semibold text-xl lg:text-4xl lg:text-left">
                  რაღაცა სახელი კოტეჯის
                </h1>
                <h4 className="text-gray-500 text-center text-xs lg:text-sm lg:text-left lg:mt-4">
                  კეთილი იყოს თქვენი მობრძანება ჩვენს მყუდრო და კომფორტულ
                  კოტეჯის ნომერში. ნომერი აღჭურვილია ყველა საჭირო კომფორტით
                  თქვენი განტვირთვისთვის. აქ დაგხვდებათ ფართო და კომფორტული
                  საწოლი, რბილი თეთრეული და ბალიშები, რაც უზრუნველყოფს მშვიდ და
                  ღრმა ძილს.
                  <br />
                  <br />
                  ნომერში განთავსებულია პატარა, მაგრამ კარგად ორგანიზებული
                  დასასვენებელი ზონა, სადაც შეგიძლიათ დაჯდეთ და დაისვენოთ,
                  წაიკითხოთ წიგნი ან უყუროთ ტელევიზორს. სამზარეულო კუთხე
                  აღჭურვილია ყველა საჭირო ტექნიკითა და ჭურჭლით, რათა თქვენ
                  შეძლოთ მარტივი კერძების მომზადება.
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-3">
              <div className="bg-lightBackground rounded-xl py-8">
                <Container>
                  <h1 className="text-gray-700 font-semibold text-center text-3xl">
                    ფასი:
                  </h1>
                  <div className="flex items-center my-2">
                    <h3 className="text-red-700 text-lg font-bold lg:text-2xl">
                      {"₾150"}
                    </h3>
                    <h4 className="ml-1 text-sm text-gray-600 lg:text-lg">
                      /ღამე
                    </h4>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col justify-between">
                      <h3 className="text-md text-gray-600 font-semibold">
                        შემოსვლის თარიღი:
                      </h3>
                      <Datepicker minDate={new Date()} className="z-[60]" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-md text-gray-600 font-semibold">
                        გასვლის თარიღი:
                      </h3>
                      <Datepicker minDate={new Date()} className="z-[60]" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="text-md text-gray-600 font-semibold">
                        სტუმრების რაოდენობა:
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
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
                    <div className="flex flex-col justify-between">
                      <Button
                        outline
                        color={"primary"}
                        className="w-full border-primary border-2 border-solid p-0
                        hover:bg-red-400 hover:text-white"
                      >
                        დაგვიკავშირდი
                      </Button>
                      <Button className="w-full mt-2 bg-primary">
                        დაჯავშნა
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="bg-lightBackground rounded-xl py-8">
                <Container>
                  <h1 className="text-center text-gray-700 font-bold">
                    მეტი ინფორმაცია:
                  </h1>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center text-gray-700">
                      <FaPhoneAlt className="mr-2 text-green-500 h-4 w-4 lg:h-6 lg:w-6"></FaPhoneAlt>
                      <h4 className="text-gray-700">555 38 67 50</h4>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaInfoCircle className="mr-2 text-green-500 h-8 w-8"></FaInfoCircle>
                      <h4 className="text-gray-700 text-sm">
                        სამუშაო საათებო: დილის 9 საათი - საღამოს 6 საათი
                      </h4>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="bg-lightBackground rounded-xl py-8">
                <Container>
                  <h1 className="text-center text-gray-700 font-bold">
                    გააზიარე:
                  </h1>
                  <div className="mt-4 flex justify-around">
                    <div className="flex items-center text-white rounded-full p-4 bg-primary">
                      <FaFacebook></FaFacebook>
                    </div>
                    <div className="flex items-center text-white rounded-full p-4 bg-primary">
                      <FaInstagram></FaInstagram>
                    </div>
                    <div className="flex items-center text-white rounded-full p-4 bg-primary">
                      <FaTiktok></FaTiktok>
                    </div>
                    <div className="flex items-center text-white rounded-full p-4 bg-primary">
                      <FaYoutube></FaYoutube>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ViewRoom;
