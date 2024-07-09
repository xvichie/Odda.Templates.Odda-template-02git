import { Button } from "flowbite-react";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

interface RoomPreviewProps {
  name: string;
  price: string;
  imageUrl: string;
  beds: number;
  wetPoints: number;
  freeWifi: boolean;
}

function RoomPreview({
  name,
  price,
  imageUrl,
  beds,
  wetPoints,
  freeWifi,
}: RoomPreviewProps) {
  return (
    <div className="rounded-2xl bg-lightBackground z-[10]">
      <img src={imageUrl} alt="cottage-02" className="rounded-t-2xl" />
      <div className="flex justify-between gap-8 p-6">
        <div className="flex flex-col justify-between flex-1">
          <div className="flex items-center">
            <h3 className="text-red-700 text-2xl font-bold">{price}</h3>
            <h4 className="ml-1 text-lg text-gray-600">/ღამე</h4>
          </div>
          <h3 className="text-gray-700 font-semibold text-lg mt-1">{name}</h3>
          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-1">
              <FaBed className="text-primary"></FaBed>
              <div className="text-gray-700">: {beds}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaShower className="text-primary"></FaShower>
              <div className="text-gray-700">: {beds}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaWifi className="text-primary"></FaWifi>
              <div className="text-gray-700">: {freeWifi ? "უფასო" : "არა"}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
            <Button className="bg-primary">ნახვა</Button>
        </div>
      </div>
    </div>
  );
}

export default RoomPreview;
