import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AssignPopUp from "./AssignPopUp";
import RejectPopUp from "./RejectPopUp";

const newPosition = [
  {
    id: "050824 PHP DEVELOPER @ SJ",
    status: "On Process",
    profileSubmitted: 4,
    pendingScreening: 2,
    profilesSent: 0,
  },
];

const NewPosition = () => {
  return (
    <>
      <h2 className="text-lg mb-5 font-semibold">New Positions</h2>
      <Table className="border">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              050824 PHP DEVELOPER @ SJ
            </TableCell>
            <TableCell className="text-right">
              <AssignPopUp />
              <RejectPopUp />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 JAVA DEVELOPER @ TS
            </TableCell>
            <TableCell className="text-right">
              <AssignPopUp />
              <RejectPopUp />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 GRAPHIC DESIGNER @ TS
            </TableCell>
            <TableCell className="text-right">
              <Button className="bg-violet-500 hover:bg-violet-400">View</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default NewPosition;
