import React from "react";
import Container from "../../Shared/Container/Container";
import { Button } from "flowbite-react";

function MainLandingPerks() {
  return (
    <div className="relative py-[28rem] lg:py-56">
      <img
        src="/images/backgrounds/background-04.jpg"
        alt="background-04"
        className="z-[1] absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="bg-darkBackground w-full h-full z-[2] absolute opacity-85 top-0 left-0"></div>
      <div
        className="w-full h-full z-[50]
      absolute inset-0 m-auto"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="z-50 flex items-center h-full">
              <img
                src="/images/backgrounds/background-05.jpg"
                alt="background-05.jpg"
                className="z-50 border-8 border-white border-solid lg:rotate-2 hover:rotate-0 duration-200"
              />
            </div>
            <div className="flex flex-col gap-8 h-full justify-center">
                <div>
                    <h3 className="text-gray-400 text-center lg:text-left">აღმოაჩინე დასვენების ახალი გზები</h3>
                    <h2 className="text-white font-bold text-5xl text-center lg:text-left">გახადე დასვენება დაუვიწყარი</h2>
                </div>
                <div>
                    <h4 className="text-gray-200 text-center lg:text-left">მოგონებები, რომელიც არასდროს წავა შენგან და სულ შენთან დარჩება, არის სწორედ აქვს, ჩვენ სასტუმროში</h4>
                </div>
                <Button outline>გაიგე მეტი</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainLandingPerks;
