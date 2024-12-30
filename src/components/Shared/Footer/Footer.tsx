import React from "react";

import {
  Button,
  Footer as FooterFlowbite,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import Container from "../Container/Container";

function Footer() {
  return (
    <>
      <div className="w-full bg-lightBackground py-12">
        <Container>
          <div
            className="border-primary border-solid border-2 rounded-xl p-4
            flex flex-col items-center bg-gray-100"
          >
            <div className="w-full lg:w-5/6 py-4">
              <h1 className="font-bold text-primary text-2xl text-center lg:text-5xl">
                მოგვწერე
              </h1>
              <div className="flex flex-col gap-4 py-4 rounded-xl">
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-4">
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
                  <div className="w-full">
                    <Button className="w-full bg-primary">გაგზავნა</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full bg-lightBackground">
        {/* <Container> */}
        <FooterFlowbite>
          <div className="w-full bg-lightBackground py-8">
            <Container>
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className="flex items-center">
                  <FooterFlowbite.Brand
                    href="https://flowbite.com"
                    src="/images/cottage-logo-01.png"
                    alt="Flowbite Logo"
                  />
                  <h4 className="font-semibold text-primary">Tally Paradise</h4>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <FooterFlowbite.Title
                      title="ჩვენ შესახებ"
                      className="text-primary"
                    />
                    <FooterFlowbite.LinkGroup col>
                      <FooterFlowbite.Link href="#" className="text-black">
                        Tally Paradise
                      </FooterFlowbite.Link>
                      <FooterFlowbite.Link href="#" className="text-black">
                        დაჯავშნა
                      </FooterFlowbite.Link>
                    </FooterFlowbite.LinkGroup>
                  </div>
                  <div>
                    <FooterFlowbite.Title
                      title="გამოგვყევით"
                      className="text-primary"
                    />
                    <FooterFlowbite.LinkGroup col>
                      <FooterFlowbite.Link href="#" className="text-black">
                        Github
                      </FooterFlowbite.Link>
                      <FooterFlowbite.Link href="#" className="text-black">
                        Discord
                      </FooterFlowbite.Link>
                    </FooterFlowbite.LinkGroup>
                  </div>
                  <div>
                    <FooterFlowbite.Title
                      title="ლეგალური"
                      className="text-primary"
                    />
                    <FooterFlowbite.LinkGroup col>
                      <FooterFlowbite.Link href="#" className="text-black">
                        კონფიდენციალურობა
                      </FooterFlowbite.Link>
                      <FooterFlowbite.Link href="#" className="text-black">
                        წესები და პირობები
                      </FooterFlowbite.Link>
                    </FooterFlowbite.LinkGroup>
                  </div>
                </div>
              </div>
              <FooterFlowbite.Divider />
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterFlowbite.Copyright
                  href="#"
                  by="Tally Paradise"
                  year={2024}
                  className="text-primary"
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsFacebook}
                    className="text-primary hover:text-red-900"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsInstagram}
                    className="text-primary hover:text-red-900"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsTwitter}
                    className="text-primary hover:text-red-900"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsGithub}
                    className="text-primary hover:text-red-900"
                  />
                  <FooterFlowbite.Icon
                    href="#"
                    icon={BsDribbble}
                    className="text-primary hover:text-red-900"
                  />
                </div>
              </div>
            </Container>
          </div>
        </FooterFlowbite>
        {/* </Container> */}
      </div>
    </>
  );
}

export default Footer;
