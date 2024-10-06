import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CandidatePopUp = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
          View Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[80vw] w-full">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-xl leading-none">Assign To</h4>
          </div>
          <div className="grid gap-2">
            <form action="">
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select a sales person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Danish(5)">Danish (5)</SelectItem>
                    <SelectItem value="Fahad(3)">Fahad (3)</SelectItem>
                    <SelectItem value="Yusuf(2)">Yusuf (2)</SelectItem>
                    <SelectItem value="Kaif(3)">Kaif (3)</SelectItem>
                    <SelectItem value="Ehtasam(1)">Ehtasam (1)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="mt-3 w-full" type="submit">
                Assign
              </Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CandidatePopUp;
