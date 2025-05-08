import { Input } from "@/components/ui/input";
import React from "react";

function OnboardingCardInput() {
  return (
    <div>
      <Input
        type="text"
        placeholder="Where would you like to go?"
        className="w-full max-w-xs"
      />
    </div>
  );
}

export default OnboardingCardInput;
