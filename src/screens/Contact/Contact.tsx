import React from "react";
import Container from "../../components/Shared/Container/Container";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import GoogleMapsComponent from "../../components/Shared/GoogleMapsComponent/GoogleMapsComponent";

function Contact() {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <img
            src="/images/backgrounds/background-06.jpg"
            alt="background-06.jpg"
            className="w-screen h-[50vh] lg:h-[vh] brightness-75 object-cover"
          />
          <div className="w-full absolute bottom-4">
            <Container>
              <h1 className="text-4xl font-bold text-white">კონტაქტი</h1>
            </Container>
          </div>
        </div>
      </div>
      <div className="py-12">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16">
                  <div className="grid grid-cols-1 lg:col-span-2 gap-4">
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="name"
                          value="სახელი"
                          className="text-primary"
                        />
                      </div>
                      <TextInput
                        id="name"
                        type="text"
                        icon={IoMdPerson}
                        placeholder="ჩაწერეთ თქვენი სახელი..."
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email4"
                          value="ელ. ფოსტა"
                          className="text-primary"
                        />
                      </div>
                      <TextInput
                        id="email4"
                        type="email"
                        icon={HiMail}
                        placeholder="ჩაწერეთ თქვენი ელ. ფოსტა..."
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label
                          htmlFor="phone"
                          value="ტელეფონის ნომერი"
                          className="text-primary"
                        />
                      </div>
                      <TextInput
                        id="phone"
                        icon={FaPhoneAlt}
                        placeholder="ჩაწერეთ თქვენი ტელეფონის ნომერი..."
                        required
                      />
                    </div>
                    <div className="h-full flex flex-col">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="comment"
                          value="თქვენი მესიჯი"
                          className="text-primary"
                        />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="ჩაწერეთ თქვენი მესიჯი..."
                        required
                        rows={4}
                        className="h-52 lg:flex-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-primary font-semibold text-xl">არ მოგერიდოს მოწერა</h1>
                    <h4 className="text-gray-500 text-sm">Cum sociis natoque penatibus et magnis dis parturient. Praeterea iter est quasdam res quas ex communi. Ut enim ad minim veniam, quis nostrud exercitation.</h4>
                    <div className="flex justify-between lg:justify-normal">
                        <img src="/images/persons/person-01.jpg" alt="person-01"
                        className="rounded-full w-24 h-24 lg:mr-4" />
                        <div className="flex flex-col justify-between">
                            <h3 className="text-primary font-bold">ზაზა გამეზარდაშვილი</h3>
                            <div>
                                <h4 className="text-sm">Concierge Manager</h4>
                                <h4 className="text-sm">+44 203 290 1502</h4>
                                <h4 className="text-sm">support@curlythemes.com</h4>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <Button className="w-full bg-primary text-white">
                    გაგზავნა
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-primary font-bold text-center lg:text-left text-2xl">
                  მონაცემები
                </h2>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-500 text-left text-sm">
                    <strong>მისამართი:</strong>{" "}
                    {"თბილისი, ი. ვეკა~უას #42, 32 ჩიხი, მეშვიდე სართული"}
                  </h2>
                  <h2 className="text-gray-500 text-left text-sm">
                    <strong>ტელეფონი:</strong> {"+332 2 34 22 98"}
                  </h2>
                  <h2 className="text-gray-500 text-left text-sm">
                    <strong>მობილური ტელეფონი:</strong> {"+995 555 48 67 50"}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-primary font-bold text-center lg:text-left text-2xl">
                  სოციალური მედია
                </h2>
                <div className="flex gap-2">
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
              </div>
            </div>
            <div className="">
            </div>
          </div>
        </Container>
      </div>
      <GoogleMapsComponent />
    </>
  );
}

export default Contact;
