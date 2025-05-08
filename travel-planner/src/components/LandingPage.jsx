import React from "react";
import tokyo2 from "../assets/tokyo2.webp";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function LandingPage() {
  return (
    <div className="min-h-screen p-3 flex items-center justify-center bg-neutral-100 dark:bg-gray-800">
      <div className="w-full max-w-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="font-bold text-2xl">Hello Chhavi!</h1>
            <p>Ready for the trip?</p>
          </div>
          <div className="flex justify-end items-center pr-3">
            <div className="flex items-center justify-center w-12 h-12 bg-[#FF7339] text-white text-2xl rounded-full">
              <span className="font-200">C</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="pt-3">Your Upcoming Trip</h2>
          <div className="relative pt-2">
            <img
              className="rounded-lg w-full h-auto"
              src={tokyo2}
              alt="Tokyo Tower"
            />
            <div className="absolute top-0 left-0 p-5 w-full">
              <div className="flex flex-row justify-between items-start">
                <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-wider">
                  TOKYO
                </h1>
                <GoArrowUpRight className="text-white text-xl sm:text-2xl mt-2" />
              </div>
              <p className="text-white">27.01.2025 - 02.02.2025</p>
            </div>
          </div>
          <div className="bg-[#313DDF] text-white rounded-lg p-3 mt-3 border-[#3643FB] font-semibold">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p>Flight Details</p>
                <p>26.01.2025 10:50 am</p>
                <div className="pt-2 flex flex-row items">
                  <div>
                    <p className="text-lg">DEL</p>
                    <p>Delhi, India</p>
                  </div>
                  <div className="flex items-center mx-2">
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">NRT</p>
                    <p>Narita, Tokyo</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="underline text-xs">See all</p>
              </div>
            </div>
          </div>
          <div className="p-3 mt-3font-semibold">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xl">Accomodation</p>
                <div className="pt-2 flex flex-row items">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <img
                          className="rounded-lg w-full h-auto"
                          src={tokyo2}
                          alt="Tokyo Tower"
                        />
                      </CardTitle>
                      <CardTitle>Shinagawa Prince Hotel</CardTitle>
                      {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                      <p>Check in: 26.01.2025, 11:15 pm</p>
                      <p>Check out: 28.01.2025, 11:15 am</p>
                    </CardContent>
                    <CardFooter>
                      <p>2 Nights</p>
                      <p>Confirmed</p>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div>
                <p className="underline text-xs">See all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
