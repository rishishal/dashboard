import { ColumnDef } from "@tanstack/react-table";
import { RecentDataProps } from "@/interface/index";

export const Ordercolumns: ColumnDef<RecentDataProps>[] = [
  {
    accessorKey: "order_id",
    header: "ORDER ID",
    size: 100,
  },
  {
    accessorKey: "date",
    header: () => <span>Created At</span>,
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return (
        <span>
          {date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      );
    },
    size: 270,
  },

  {
    accessorKey: "name",
    header: "Customer",
    size: 270,
  },
  {
    accessorKey: "total_amount",
    header: "TOTAL AMOUNT",
    cell: ({ getValue }) => {
      const total_amount = getValue<number>();
      return <span>₹ {total_amount}</span>;
    },
    size: 270,
  },
  {
    accessorKey: "payment_status",
    header: "PAYMENT STATUS",
    cell: ({ row }) => {
      const payment_status = row.original.payment_status;
      let colorClass;
      switch (payment_status) {
        case "paid":
          colorClass = "text-white bg-green-500";
          break;
        case "unpaid":
          colorClass = "text-white bg-gray-400";
          break;
        default:
          colorClass = "";
      }
      return (
        <span
          className={`rounded-md text-sm font-semibold px-2 py-1 capitalize ${colorClass}`}
        >
          {payment_status}
        </span>
      );
    },
    size: 270,
  },
  {
    accessorKey: "quantity",
    header: "ITEMS",

    cell: ({ row }) => {
      const quantity = row.original.quantity;
      return <span>{quantity} items</span>;
    },
    size: 270,
  },
  {
    accessorKey: "delivery_number",
    header: "DELIVERY",
    size: 270,
  },
  {
    accessorKey: "status",
    header: "ORDER STATUS",
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;

      switch (status) {
        case "shipped":
          colorClass = "text-yellow-500 bg-yellow-100 border border-yellow-500";
          break;
        case "delivered":
          colorClass = "text-green-500 bg-green-100 border border-green-500";
          break;
        case "cancelled":
          colorClass = "text-red-500 bg-red-100 border border-red-500";
          break;
        case "returned":
          colorClass = "text-gray-500 bg-gray-100 border border-gray-500";
          break;
        default:
          colorClass = "";
      }
      return (
        <span
          className={`px-3 py-0.5 text-xs rounded-full font-medium flex items-center gap-1 w-fit capitalize ${colorClass}`}
        >
          {status}
        </span>
      );
    },
    size: 270,
  },
];
