import { BannerDataProps } from "@/interface";
import { ColumnDef } from "@tanstack/react-table";
import { BannnerTableAction } from "./bannner-table-action";
import { ActiveSwitch } from "./active-switch";
import { Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const Bannercolumns: ColumnDef<BannerDataProps>[] = [
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
    accessorKey: "bannerImage",
    header: "Image",
    cell: ({ row }) => {
      const Image = row.original.bannerImage;
      return (
        <div>
          <img
            src={Image}
            alt="bannerImages"
            className="w-20 h-11 object-contain"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "view",
    header: "View",
    cell: () => {
      return <Eye className="size-5 cursor-pointer" />;
    },
  },
  {
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) => {
      const activeStatus = row.original.active;

      return (
        <div className="flex items-center space-x-2">
          <ActiveSwitch activeStatus={activeStatus} />
        </div>
      );
    },
  },
  {
    accessorKey: "url",
    header: "Url",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return <BannnerTableAction />;
    },
  },
];
