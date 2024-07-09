import React from "react";
import Container from "../../Shared/Container/Container";
import { Button } from "flowbite-react";

function MainLandingAboutUs() {
  return (
    <div className="flex py-12">
      <Container>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            <div className="flex flex-col gap-2 w-full items-center">
              <h3 className="text-gray-400 lg:text-lg">
                რატომ უნდა დაისვენო ჩვენთან?
              </h3>
              <h2 className="text-gray-950 text-4xl font-bold text-center lg:text-5xl">
                ჩვენ <br className="lg:hidden" /> შესახებ
              </h2>
              <div className="max-w-24 w-full lg:mt-2 bg-primary h-1"></div>
            </div>
            <div className="w-full">
              <h3 className="text-center text-gray-500 text-sm lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non ornare eros. Ut pharetra ornare lorem, sit amet bibendum
                quam imperdiet ut.
              </h3>
            </div>
            <div className="w-full">
              <h5 className="text-center text-gray-500 text-sm lg:text-lg">
                Duis diam eros, dignissim sed condimentum ac, vehicula nec nisl.
                Suspendisse condimentum libero tempus, accumsan augue et, varius
                dui. Morbi justo tortor, tincidunt ornare magna ut, molestie
                mattis enim. Cras ac justo et augue suscipit euismod vel eget
                lectus. Proin vehicula nunc arcu, pulvinar accumsan.
              </h5>
            </div>
            <Button className="bg-primary mt-4">დაგვიკავშირდი</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainLandingAboutUs;
