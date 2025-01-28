import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgressBar } from "./progress-bar";
import { ProductDataProps } from "@/interface";
import { ProductData } from "@/Pages/Home/ProductData";

export function PaymentSheet({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col space-y-4 !max-w-lg rounded-md p-0 bg-gray-100 overflow-y-scroll">
        <SheetHeader className="space-y-1 px-6">
          <SheetTitle>#012345/10</SheetTitle>
          <SheetDescription>Order details</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8 py-4 px-6 bg-white">
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
          <hr />
          <div className="space-y-4">
            <h2 className="text-sm">Items</h2>
            <div className="flex flex-col gap-4">
              {ProductData.slice(0, 3).map((items: ProductDataProps) => (
                <div key={items.order_id} className="flex justify-between">
                  <div className="flex gap-4">
                    <img
                      src={items.image}
                      alt={items.product_name}
                      className="w-14 h-14 object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold truncate w-40">
                        {items.product_name}
                      </span>

                      <span className="text-xs text-gray-500">
                        {items.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">₹{items.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="space-y-4">
            <h2 className="text-base font-bold">Payment</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 text-sm">
                <span>Subtotal</span>
                <span>Discount</span>
                <span>Shipping cost</span>
                <span>Tax</span>
                <span className="font-bold">Total</span>
              </div>
              <div className="flex flex-col text-right gap-4 text-sm">
                <span>₹2,950.00</span>
                <span>₹10.0</span>
                <span>₹8,00</span>
                <span>₹2.00</span>
                <span>₹2,960.00</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-end gap-4">
            <Button className="" variant={"outline"}>
              Download invoice
            </Button>
            <Button className="" variant={"outline"}>
              Resend invoice
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
