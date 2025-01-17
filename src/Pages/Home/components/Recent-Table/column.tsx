import { ColumnDef } from "@tanstack/react-table";
import { RecentDataProps } from "@/interface/index";

export const Ordercolumns: ColumnDef<RecentDataProps>[] = [
  {
    accessorKey: "order_id",
    header: () => (
      <div className="w-32">
        <span>ORDER ID</span>
      </div>
    ),
  },
  {
    accessorKey: "payment_id",
    header: () => (
      <div className="w-24">
        <span>PAYMENT ID</span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <div className="w-32">
        <span>NAME</span>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="w-32">
        <span>PHONE NUMBER</span>
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: () => (
      <div className="w-44">
        <span>ADDRESS</span>
      </div>
    ),
  },
  {
    accessorKey: "pin_code",
    header: () => (
      <div className="w-32">
        <span>PIN CODE</span>
      </div>
    ),
  },
  {
    accessorKey: "total_amount",
    header: () => (
      <div className="w-32">
        <span>TOTAL AMOUNT</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="w-32">
        <span>USER ID</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="w-32">
        <span>ORDER STATUS</span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="w-32">
        <span>DATE</span>
      </div>
    ),
  },
];
