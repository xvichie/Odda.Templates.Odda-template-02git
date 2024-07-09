import { Carousel } from "flowbite-react";
import React from "react";

function MainLanding() {
  return (
    <div className="h-screen">
      <Carousel draggable={false}>
        <img src="/images/backgrounds/background-01.jpg" alt="background-01.jpg" className="h-full object-cover brightness-90" />
        <img src="/images/backgrounds/background-02.jpg" alt="background-02.jpg" className="h-full object-cover brightness-90" />
        <img src="/images/backgrounds/background-03.jpg" alt="background-03.jpg" className="h-full object-cover brightness-90" />
      </Carousel>
    </div>
  );
}

export default MainLanding;
