// src/components/PositionsTable.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye,Plus, List } from 'lucide-react';

const positionsData = [
  {
    id: '050824 PHP DEVELOPER @ SJ',
    status: 'On Process',
    profileSubmitted: 4,
    pendingScreening: 2,
    profilesSent: 0,
  },
];

export default function PositionsTable() {
  return (
    <>
     <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Active Positions Status</h2>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create new Position
              </Button>
              <Button variant="outline" size="sm">
                <List className="h-4 w-4 mr-2" />
                View All Positions
              </Button>
            </div>
          </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Position ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Profile Submitted</TableHead>
            <TableHead>Pending Screening</TableHead>
            <TableHead>Profiles Sent to Client</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positionsData.map((position) => (
            <TableRow key={position.id}>
              <TableCell className="font-medium">{position.id}</TableCell>
              <TableCell>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {position.status}
                </span>
              </TableCell>
              <TableCell>{position.profileSubmitted}</TableCell>
              <TableCell>{position.pendingScreening}</TableCell>
              <TableCell>{position.profilesSent}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
