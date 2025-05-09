import React from "react";
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
      </div>
    </div>
  );
}

export default Activities;
