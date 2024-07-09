import React from "react";
import { Badge } from "flowbite-react";
import Container from "../../../components/Shared/Container/Container";

function PerksSection() {
  return (
    <div className="py-24 bg-darkBackground z-0">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <img
            src="/images/rooms/room-02.jpg"
            alt="cottage-inside-02"
            className="max-h-[600px] h-[600px] object-cover rounded-3xl"
          />
          <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full flex justify-center lg:justify-start">
                <Badge className="bg-primary text-white max-w-16" size="xl">
                  01
                </Badge>
              </div>
              <h3 className="w-full text-center text-white font-semibold text-2xl lg:text-left">
                ყველა საჭირო ნივთი კოტეჯში
              </h3>
              <h5 className="w-full text-center text-gray-300 text-sm lg:text-left">
                ყველა ნივთი, რომელიც კი შეიძლება დაგჭირდეს, არის ჩვენ სასტუმროში
              </h5>
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full flex justify-center lg:justify-start">
                <Badge className="bg-blue-600 text-white max-w-16" size="xl">
                  02
                </Badge>
              </div>
              <h3 className="w-full text-center text-white font-semibold text-2xl lg:text-left">
                ეზო და გარშემო აქტივობები
              </h3>
              <h5 className="w-full text-center text-gray-300 text-sm lg:text-left">
                ჩვენთან ყოფნის დროს, ყოველთვის იპოვი აქტივობას, რომლითაც
                უნიკალურ დროს გაატარებ
              </h5>
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="w-full flex justify-center lg:justify-start">
                <Badge className="bg-green-400 text-white max-w-16" size="xl">
                  03
                </Badge>
              </div>
              <h3 className="w-full text-center text-white font-semibold text-2xl lg:text-left">
                24 საათიანი მომსახურება
              </h3>
              <h5 className="w-full text-center text-gray-300 text-sm lg:text-left">
                რაც გინდა, როცა გინდა. უბრალოდ გვითხარი.
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PerksSection;
