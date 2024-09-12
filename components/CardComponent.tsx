import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CardProps {
  refNumber: string;
  status: string;
  cartName: string;
  manufacturer: string;
  shelf: string;
  description: string;
  comments: string[];
  itemTitle: string; // New prop for the item title
  peopleSoftNumber: string;
}

export default function ItemCard({
  refNumber,
  status,
  cartName,
  manufacturer,
  shelf,
  description,
  comments,
  itemTitle, // Destructure the new prop
  peopleSoftNumber,
}: CardProps) {
  return (
    <Card className="w-full max-w-md my-8 bg-secondary">
      <CardHeader className="bg-slate-200">
        <CardTitle className="text-2xl font-bold">{itemTitle}</CardTitle>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-muted-foreground">
            REF#: {refNumber}
          </span>
          <Badge
            className={
              status.toLowerCase() === "active"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }
          >
            {status}
          </Badge>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          PeopleSoft#: {peopleSoftNumber}
        </span>

        <span className="text-xs font-medium text-muted-foreground">
          {manufacturer}
        </span>
      </CardHeader>
      <Separator />

      <CardContent className="space-y-2">
        <div>
          <h3 className="text-md font-semibold mt-3">Cart Name</h3>
          <p className="text-sm text-muted-foreground">{cartName}</p>
        </div>

        <Separator />
        <div>
          <h3 className="text-md font-semibold">Shelf</h3>
          <p className="text-sm text-muted-foreground">{shelf}</p>
        </div>
        <Separator />
        <div>
          <h3 className="text-md font-semibold">Description</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <h3 className="text-md font-semibold mb-2">Comments</h3>
          <ScrollArea className="h-[100px] w-full rounded-md border p-2 bg-background">
            <p className="text-sm text-muted-foreground">
              {comments.length > 0
                ? comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      {index + 1}. {comment}
                      <br />
                    </React.Fragment>
                  ))
                : "No comments available."}
            </p>
          </ScrollArea>
        </div>
      </CardFooter>
    </Card>
  );
}
