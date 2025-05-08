import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import OnboardingCardInput from "./OnboardingCardInput";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiOutlineLocationMarker } from "react-icons/hi";

function OnboardingCard() {
  return (
    <div className="min-h-screen">
      <Card>
        <CardHeader className={""}>
          <CardTitle className={"text-2xl font-bold"}>
            Plan Your Journey, Your Way!
          </CardTitle>
          <CardDescription>
            Let's create your personalized travel experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Where would you like to go?</p>
          <div className="relative">
            <HiOutlineLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
            <Input
              type="text"
              placeholder="Enter destination"
              className="w-full pl-10 pr-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </CardContent>
        <CardContent>
          <p>How long will you stay?</p>
          <div className="mt-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardContent>
          <p>Who are you traveling with?</p>
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OnboardingCard;
