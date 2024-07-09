import React from "react";
import { Button } from "flowbite-react";
import Container from "../../../components/Shared/Container/Container";

function AboutUsSection() {
  return (
    <div className="bg-lightBackground z-[10]">
      <div className="bg-lightBackground pt-8 pb-24 rounded-[36px] z-[10]">
        <Container>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <img
              src="/images/rooms/room-01.jpg"
              alt="cottage-inside"
              className="rounded-2xl object-cover aspect-square lg:h-96"
            />
            <div className="w-full flex flex-col justify-between gap-6 mt-4">
              <div className="flex flex-col gap-6">
                <h2 className="text-center text-primary text-2xl font-semibold
                lg:text-4xl lg:text-left">
                  კეთილი იყოს შენი მობრძანება დასვნების ოაზისში
                </h2>
                <h4 className="text-center text-gray-500 text-md
                lg:text-left">
                  იპოვე და დაჯავშნე შენთვის სასურველი ოთახი
                </h4>
                <h5 className="text-center text-sm text-gray-600
                lg:text-left">
                  კოტეჯი მდებარეობს ულამაზეს ბუნებაში, ქალაქის ხმაურიდან შორს.
                  აქ შეგიძლიათ დაისვენოთ და განიტვირთოთ, დატკბეთ მშვიდობითა და
                  სიწყნარით. სახლი აღჭურვილია ყველა საჭირო კომფორტით: მყუდრო
                  საძინებელი, კომფორტული მისაღები ოთახი, სრულად აღჭურვილი
                  სამზარეულო და თანამედროვე სააბაზანო. კოტეჯის ეზო საშუალებას
                  მოგცემთ გაატაროთ დრო სუფთა ჰაერზე, მოაწყოთ პიკნიკი ან უბრალოდ
                  დატკბეთ ბუნების ხედებით.
                </h5>
              </div>
              <Button className="bg-none lg:w-36
              bg-primary hover:bg-blue-500">
                გაიგე მეტი
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutUsSection;
