import React from "react";
import sensoji from "../assets/sensoji.png";
import tokyosky from "../assets/tokyosky.png";
import kimono from "../assets/kimono.png";
import { MdOutlineNordicWalking } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Activities() {
  return (
    <div className="p-3 mt-3 w-full">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl">Activities</p>
          <p className="underline text-xs whitespace-nowrap">See all</p>
        </div>
        <div className=" px-2 py-3 border-1 border-[#8d99ae] rounded-lg w-full max-w-sm min-h-[100px]">
          <div className="flex flex-row flex-wrap justify-start gap-2">
            <div className="border-2 border-[#313ddf] rounded-sm px-3 py-1 bg-[#313ddf]">
              <p className="text-xs text-white">Day Plan</p>
            </div>
            <div className="border-1 border-[#313ddf] rounded-sm px-3 py-1">
              <p className="text-xs text-[#313ddf] font-semibold">
                14 Activities
              </p>
            </div>
          </div>
          <div className="">
            {/* date box main div */}
            <div className="flex flex-row gap-2 rounded-sm text-xs pt-2 whitespace-nowrap overflow-x-auto text-center">
              {/* a date box inside every div*/}
              <div className="flex flex-row gap-0 items-center border border-[#313ddf] rounded-sm bg-[#313ddf]">
                <p className="rotate-270 text-white font-semibold">JAN</p>
                <div className="p-1 bg-[#ffffff] w-[46px] h-[44px] rounded-r-sm">
                  <p className="">MON</p>
                  <p className="font-bold">27</p>
                </div>
              </div>
              <div className="border-2 border-[#8d99ae] rounded-sm p-1 min-w-[46px] min-h-[44px] bg-[#e5e5e5] text-[#808080]">
                <p>TUE</p>
                <p className="font-bold">28</p>
              </div>
              <div className="border-2 border-[#8d99ae] rounded-sm p-1 min-w-[46px] min-h-[44px] bg-[#e5e5e5] text-[#808080]">
                <p>WED</p>
                <p className="font-bold">29</p>
              </div>
              <div className="border-2 border-[#8d99ae] rounded-sm p-1 min-w-[46px] min-h-[44px] bg-[#e5e5e5] text-[#808080]">
                <p>THU</p>
                <p className="font-bold">30</p>
              </div>
              <div className="border-2 border-[#8d99ae] rounded-sm p-1 min-w-[46px] min-h-[44px] bg-[#e5e5e5] text-[#808080]">
                <p>FRI</p>
                <p className="font-bold">31</p>
              </div>
              <div className="flex flex-row gap-0 items-center border border-[#808080] rounded-sm bg-[#808080]">
                <p className="rotate-270 text-[#ffffff] font-semibold">FEB</p>
                <div className="p-1 bg-[#e5e5e5] text-[#808080] w-[46px] h-[44px] rounded-r-sm">
                  <p>SAT</p>
                  <p className="font-bold">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 rounded-lg w-full max-w-sm flex flex-row items-start gap-2">
          <div className="bg-[#313ddf] text-white rounded-lg p-1 min-w-[31%]">
            <p className="text-xs font-bold">Day 1 27.01.2025</p>
          </div>
          <div className="flex flex-row rounded-lg p-1 min-w-[31%]">
            <MdOutlineNordicWalking className="text-[#313ddf]" />
            <p className="text-xs text-[#313ddf] font-semibold">3 Activities</p>
          </div>
        </div>
        {/* Activity1 */}
        <div className="pr-2 mb-2 border-1 border-[#8d99ae] rounded-lg w-full max-w-sm">
          <div className="flex flex-row gap-0 items-center min-h-[127px]">
            <img className="rounded-l-lg" src={sensoji} alt="Senso-Ji" />
            <div className="px-1 py-1 bg-[#ffffff] w-full h-[127px] rounded-r-sm flex flex-col justify-between leading-snug">
              <div>
                <p className="text-md font-semibold">
                  Senso-ji Temple & Nakamise Shopping Street Senso-ji
                </p>
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-semibold">Timing</span>: 8:15 am Morning
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Duration</span>: 3 hours
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Pick up</span>: From Hotel
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Activity2 */}
        <div className="pr-2 mb-2 border-1 border-[#8d99ae] rounded-lg w-full max-w-sm">
          <div className="flex flex-row gap-0 items-center min-h-[127px]">
            <img className="rounded-l-lg" src={tokyosky} alt="Senso-Ji" />
            <div className="px-1 py-4 bg-[#ffffff] w-full h-[127px] rounded-r-sm flex flex-col justify-between">
              <div className="">
                <p className="text-md font-semibold">Tokyo Sky Tree</p>
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-semibold">Timing</span>: 8:15 am Morning
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Duration</span>: 3 hours
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Pick up</span>: From Hotel
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Activity3 */}
        <div className="pr-2 mb-2 border-1 border-[#8d99ae] rounded-lg w-full max-w-sm">
          <div className="flex flex-row gap-0 items-center min-h-[127px]">
            <img className="rounded-l-lg" src={kimono} alt="Senso-Ji" />
            <div className="px-1 py-4 bg-[#ffffff] w-full h-[127px] rounded-r-sm flex flex-col justify-between">
              <div className="">
                <p className="text-md font-semibold">Kimono Wearing</p>
              </div>
              <div>
                <p className="text-xs">
                  <span className="font-semibold">Timing</span>: 8:15 am Morning
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Duration</span>: 3 hours
                </p>
                <p className="text-xs text-bold">
                  <span className="font-semibold">Pick up</span>: From Hotel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
