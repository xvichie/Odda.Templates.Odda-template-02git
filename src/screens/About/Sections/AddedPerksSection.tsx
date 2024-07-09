import React from "react";
import Container from "../../../components/Shared/Container/Container";

import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { PiChefHatFill } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";


function AddedPerksSection() {
  return (
    <div className="py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col lg:justify-center gap-4">
            <h2
              className="font-bold text-primary text-2xl text-center 
                    lg:text-left lg:text-5xl"
            >
              რატომ უნდა დაისვენო ჩვენთან?
            </h2>
            <h4
              className="text-gray-600 text-center text-sm 
                    lg:text-left lg:text-lg"
            >
              ჩვენთან იმიტომ უნდა დაისვენო, რომ გვაქ ყველაფერი რაც კი შეიძლება
              დაგჭირდეს. საუკეთესო ინვენტარი, გარემო ფასები და ა.შ. რავი, მეტი
              რაღა გინდა?
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-2 items-center">
              <TbAirConditioning className="h-24 w-24 lg:w-16 lg:h-16 text-primary" />
              <h3 className="text-white font-semibold text-center lg:text-sm">
                კონდიციონერი
              </h3>
              <h4 className="text-gray-600 text-center lg:text-xs">
                ძაან მაგარი კონდიციონერი გვაქ დედას ვფიცავარ
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <PiChefHatFill className="h-24 w-24 lg:w-16 lg:h-16 text-primary" />
              <h3 className="text-white font-semibold text-center lg:text-sm">
                უფასო კვება
              </h3>
              <h4 className="text-gray-600 text-center lg:text-xs">
                ძაან მაგარი კვებაც არის ჩემი პირში შევეცი
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaWifi className="h-24 w-24 lg:w-16 lg:h-16 text-primary" />
              <h3 className="text-white font-semibold text-center lg:text-sm">
                უფასო ინტერნეტი
              </h3>
              <h4 className="text-gray-600 text-center lg:text-xs">
                Wifi-ც უფასოა მართლა
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <GiForkKnifeSpoon className="h-24 w-24 lg:w-16 lg:h-16 text-primary" />
              <h3 className="text-white font-semibold text-center lg:text-sm">
                ინვენტარი
              </h3>
              <h4 className="text-gray-600 text-center lg:text-xs">
                ყველა ინვენტარიც გაქვს, მეტი რაღა გინდა
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddedPerksSection;
