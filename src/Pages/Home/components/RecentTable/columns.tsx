import { ColumnDef } from "@tanstack/react-table";
import { RecentOrderProps } from "@/interface/index";
import { FaCheck, FaInbox } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { ReactNode } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<RecentOrderProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "order_id",
    header: "order_ID",
  },
  {
    accessorKey: "product_name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.product_name;
      return <span className="text-clip">{name}</span>;
    },
  },
  {
    accessorKey: "order_items",
    header: "Items",
  },

  {
    accessorKey: "date",
    header: "Date",
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
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;
      let icon: ReactNode;

      //Apply color and icon based on status

      switch (status) {
        case "delivered":
          colorClass = "text-green-500 bg-green-100";
          icon = <FaCheck className="text-xs" />;
          break;
        case "shipped":
          colorClass = "text-yellow-500 bg-yellow-100";
          icon = <IoMdInformationCircleOutline className="text-xs" />;
          break;
        case "cancelled":
          colorClass = "text-red-500 bg-red-100";
          icon = <RxCrossCircled />;
          break;
        case "returned":
          colorClass = "text-blue-500 bg-blue-100";
          icon = <PiKeyReturnDuotone />;
          break;
        default:
          colorClass = "text-gray-600 bg-gray-200";
          icon = <FaInbox />;
      }
      return (
        <span
          className={`px-3 py-0.5 rounded-full font-medium flex items-center gap-1 w-fit ${colorClass}`}
        >
          {icon}
          <span className="text-xs">{status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      // const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText("dshdhsgd")}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
