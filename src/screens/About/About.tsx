import React from "react";
import Container from "../../components/Shared/Container/Container";
import AboutUsSection from "./Sections/AboutUsSection";
import PerksSection from "./Sections/PerksSection";
import AddedPerksSection from "./Sections/AddedPerksSection";

function About() {
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
              <h1 className="text-4xl font-bold text-white">ჩვენ შესახებ</h1>
            </Container>
          </div>
        </div>
      </div>
      <div>
        <AboutUsSection />
        <PerksSection />
        <AddedPerksSection />
      </div>
    </>
  );
}

export default About;
