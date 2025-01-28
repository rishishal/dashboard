import { ColumnDef } from "@tanstack/react-table";
import { ProductDataProps } from "@/interface/index";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const columns: ColumnDef<ProductDataProps>[] = [
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
    accessorKey: "product_name",
    header: "Product Name",
    cell: ({ row }) => {
      const Image = row.original.image;
      const name = row.original.product_name;
      return (
        <div className="flex gap-2">
          <img src={Image} alt={name} className="w-10 h-11" />
          <div className="w-48">
            <p className="line-clamp-2 font-semibold text-primary/60">{name}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.original.category;
      return <span className="text-primary/60 capitalize">{category}</span>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "amount",
    header: "Price",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;

      switch (status) {
        case "stockout":
          colorClass = "text-yellow-500 bg-yellow-100 border border-yellow-500";
          break;
        case "published":
          colorClass = "text-green-500 bg-green-100 border border-green-500";
          break;
        case "inactive":
          colorClass = "text-red-500 bg-red-100 border border-red-500";
          break;
        case "draftlist":
          colorClass = "text-gray-500 bg-gray-100 border border-gray-500";
          break;
        default:
          colorClass = "";
      }
      return (
        <Select>
          <SelectTrigger
            className={`px-3 py-0.5 text-xs rounded-full font-medium flex items-center gap-1 w-fit capitalize border-none ${colorClass}`}
          >
            <SelectValue placeholder={status} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="stockout">Stockout</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="draftlist">Draftlist</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: () => {
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
