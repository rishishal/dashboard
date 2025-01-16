import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<>[] = [
  {
    accessorKey: "order_Id",
    header: "ORDER ID",
  },
  {
    accessorKey: "payment_id",
    header: "PAYMENT ID",
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "phone_number",
    header: "PHONE NUMBER",
  },
  {
    accessorKey: "address",
    header: "ADDRESS",
  },
  {
    accessorKey: "pin_code",
    header: "PIN CODE",
  },
  {
    accessorKey: "total_amount",
    header: "TOTAL AMOUNT",
  },
  {
    accessorKey: "email",
    header: "USER ID",
  },
  {
    accessorKey: "order_status",
    header: "ORDER STATUS",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
