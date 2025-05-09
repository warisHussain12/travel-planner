import React from "react";
import shinagawa from "../assets/shinagawa.png";
import mercure from "../assets/mercure.png";

import { FaClockRotateLeft } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function Accomodation() {
  return (
    <div className="p-3 mt-3 w-full ">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl">Accomodation</p>
          <p className="underline text-xs whitespace-nowrap">See all</p>
        </div>

        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex gap-3 w-[198px] h-[239px]">
            <Card className="p-0 border border-[#8d99ae] inline-block w-[198px] h-[239px]">
              <img
                className="rounded-t-lg w-[198px] h-[124px] object-cover"
                src={shinagawa}
                alt="Shinagawa Prince Hotel"
              />
              <CardHeader className="pt-2 px-2">
                <CardTitle className="text-sm leading-snug">
                  Shinagawa Prince Hotel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 pt-1 text-xs leading-snug">
                <p>Check in: 26.01.2025, 11:15 pm</p>
                <p>Check out: 28.01.2025, 11:15 am</p>
              </CardContent>
              <CardFooter className="p-2 pt-1 text-xs leading-snug flex justify-between items-center">
                <p>2 Nights</p>
                <div className="flex items-center gap-1 text-[#68c839]">
                  <p className="text-xl">
                    <CiCircleCheck />
                  </p>
                  <p>Confirmed</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="p-0 border border-[#8d99ae] inline-block w-[198px] h-[239px]">
              <img
                className="rounded-t-lg w-[198px] h-[124px] object-cover"
                src={mercure}
                alt="Mercure Tokyo Hotel"
              />
              <CardHeader className="pt-2 px-2">
                <CardTitle className="text-sm leading-snug">
                  Mercure Tokyo Hotel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 pt-1 text-xs leading-snug">
                <p>Check in: 28.01.2025, 6:00 pm</p>
                <p>Check out: 30.01.2025, 11:15 am</p>
              </CardContent>
              <CardFooter className="p-2 pt-1 text-xs leading-snug flex justify-between items-center">
                <p>2 Nights</p>
                <div className="flex items-center gap-1 text-[#ff6525]">
                  <p className="text-sm">
                    <FaClockRotateLeft />
                  </p>
                  <p>Pending</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodation;
