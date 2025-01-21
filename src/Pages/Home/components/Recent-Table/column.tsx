import { ColumnDef } from "@tanstack/react-table";
import { RecentDataProps } from "@/interface/index";

export const Ordercolumns: ColumnDef<RecentDataProps>[] = [
  {
    accessorKey: "order_id",
    header: "ORDER ID",
    size: 100,
  },
  {
    accessorKey: "payment_id",
    header: "PAYMENT ID",
    size: 270,
  },
  {
    accessorKey: "name",
    header: "NAME",
    size: 270,
  },
  {
    accessorKey: "phone",
    header: "PHONE NUMBER",
    size: 270,
  },
  {
    accessorKey: "address",
    header: "ADDRESS",
    size: 270,
  },
  {
    accessorKey: "pin_code",
    header: "PIN CODE",
    size: 270,
  },
  {
    accessorKey: "total_amount",
    header: "TOTAL AMOUNT",
    size: 270,
  },
  {
    accessorKey: "email",
    header: "USER ID",
    size: 270,
  },
  {
    accessorKey: "status",
    header: "ORDER STATUS",
    size: 270,
  },
  {
    accessorKey: "date",
    header: "DATE",
    size: 270,
  },
];
