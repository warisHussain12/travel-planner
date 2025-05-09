import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { FaP, FaPerson } from "react-icons/fa6";
import { ImManWoman } from "react-icons/im";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbFriends } from "react-icons/tb";
import { Link } from "react-router-dom";

//Home Page
function OnboardingCard() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-2 dark:bg-gray-800">
      {/*the home page resides inside a card component*/}
      <Card className="w-full max-w-sm flex flex-col h-full min-h-screen">
        <div className="flex flex-col flex-grow">
          <CardHeader className="mb-1">
            <CardTitle className="text-xl font-bold font-poppins">
              Plan Your Journey, Your Way!
            </CardTitle>
            <CardDescription>
              Let's create your personalized travel experience
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="mt-2">Where would you like to go?</p>
            <div className="relative">
              <HiOutlineLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
              <Input
                type="text"
                placeholder="Enter Destination"
                className="w-full pl-10 pr-2 py-2 mt-2 border-2 border-[#363732] rounded-md focus:outline-none focus:border-blue-500 font-700 placeholder:text-black"
              />
            </div>
          </CardContent>

          <CardContent>
            <p className="mt-2">How long will you stay?</p>
            <div className="mt-2 relative">
              <CiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
              <Select>
                <SelectTrigger className="w-full pl-10 pr-2 py-2 mt-2 border-2 border-[#363732] rounded-md focus:outline-none focus:border-blue-500 ">
                  <SelectValue
                    placeholder="Select Duration"
                    className="data-[placeholder]:font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardContent className="flex-grow">
            <p className="mt-2">Who are you traveling with?</p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  className="flex-1 min-w-[45%] border-[#6d6d6d]"
                >
                  <FaPerson className="mr-1" />
                  Solo
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-w-[45%] border-[#6d6d6d]"
                >
                  <ImManWoman className="mr-1" />
                  Couple
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-w-[45%] border-[#6d6d6d]"
                >
                  <MdOutlineFamilyRestroom className="mr-1" />
                  Family
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-w-[45%] border-[#6d6d6d]"
                >
                  <TbFriends className="mr-1" />
                  Friends
                </Button>
              </div>
            </div>
          </CardContent>
        </div>

        <CardFooter className="px-4 pb-4">
          <Button
            asChild
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg"
          >
            <Link to="/landingPage">Continue</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OnboardingCard;
