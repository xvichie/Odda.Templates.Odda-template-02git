import React from "react";
import Container from "../../components/Shared/Container/Container";
import RoomPreview from "../../components/Previews/RoomPreview/RoomPreview";

function Prices() {
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
              <h1 className="text-4xl font-bold text-white">ოთახები და ფასები</h1>
            </Container>
          </div>
        </div>
      </div>
      <div className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RoomPreview
              name="ჯუნიორ ოთახი"
              price="₾120"
              beds={3}
              freeWifi
              wetPoints={2}
              imageUrl="/images/rooms/room-01.jpg"
            />
            <RoomPreview
              name="სტანდარტ ოთახი"
              price="₾250"
              beds={3}
              freeWifi
              wetPoints={2}
              imageUrl="/images/rooms/room-02.jpg"
            />
            <RoomPreview
              name="სტანდარტ+ ოთახი"
              price="₾350"
              beds={3}
              freeWifi
              wetPoints={2}
              imageUrl="/images/rooms/room-03.jpg"
            />
            <RoomPreview
              name="მეგა ოთახი"
              price="₾420"
              beds={3}
              freeWifi
              wetPoints={2}
              imageUrl="/images/rooms/room-02.jpg"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Prices;
