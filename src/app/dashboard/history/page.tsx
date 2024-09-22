import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  ArrowUpDown
} from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";

const History = async () => {
  const { userId } = auth();

  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Output History</h2>
      <div className="rounded-md border bg-white overflow-hidden">
        <Table>
          <TableCaption>A list of your AI output history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">
                Template <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="w-[200px]">
                Title <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
              <TableHead className="w-[300px]">Description</TableHead>
              <TableHead className="text-right w-[150px]">
                Created At <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userHistory && userHistory.length > 0 ? (
              userHistory.map((history) => (
                <TableRow key={history.id}>
                  <TableCell className="font-medium">{history.templateUsed}</TableCell>
                  <TableCell>{history.title}</TableCell>
                  <TableCell>
                    <div className="max-h-[100px] overflow-y-auto pr-2">
                      <p className="whitespace-pre-wrap">{history.description}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {format(history.createdAt, "PP")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No history found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default History;
