import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgressBar } from "./progress-bar";
import { Separator } from "./ui/separator";

export function PaymentSheet({
  data,
  open,
  setOpen,
}: {
  data: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col space-y-4 !max-w-lg rounded-md p-0 bg-gray-100">
        <SheetHeader className="space-y-1 px-6">
          <SheetTitle>#012345/10</SheetTitle>
          <SheetDescription>Order details</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8 py-4 px-6 bg-white h-full">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="col-span-2 space-y-1">
              <h2 className="text-xs">Created at</h2>
              <p className="font-semibold">April 23, 2023 at 9:48 pm</p>
            </div>
            <div className="space-y-1">
              <h2 className="text-xs">Payment</h2>
              <p className="w-fit text-sm rounded-md bg-green-500 p-1 text-white">
                Paid
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-xs">Status</h2>
              <p className="w-fit border text-sm border-yellow-400 bg-yellow-100 text-yellow-400 rounded-md px-1 py-0.5">
                In progress
              </p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="space-y-3">
              <h2 className="text-xs">Customer</h2>
              <div className="flex flex-col gap-1 text-sm font-semibold">
                <span>Rishi Kumar</span>
                <Link to={"mailto:rishi.kumar01609@gmail.com"}>
                  rishi.kumar01609@gmail.com
                </Link>
                <span>7011629460</span>
              </div>
            </div>
            <Pencil className="size-4 cursor-pointer" />
          </div>
          <hr />
          <div className="space-y-4">
            <h2 className="text-sm">Timeline</h2>
            <div className="">
              <ProgressBar />
            </div>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
