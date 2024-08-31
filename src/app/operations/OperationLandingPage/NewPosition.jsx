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
              <Button className="mr-3">Assign to Sales</Button>
              <Button variant="destructive">Disapprove</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 PHP DEVELOPER @ SJ
            </TableCell>
            <TableCell className="text-right">
              <Button className="mr-3">Assign to Sales</Button>
              <Button variant="destructive">Disapprove</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 PHP DEVELOPER @ SJ
            </TableCell>
            <TableCell className="text-right">
              <Button className="mr-3">Assign to Sales</Button>
              <Button variant="destructive">Disapprove</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default NewPosition;
