import { BannerDataProps } from "@/interface";
import { ColumnDef } from "@tanstack/react-table";
import { BannnerTableAction } from "./bannner-table-action";
import { ActiveSwitch } from "./active-switch";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const Bannercolumns: ColumnDef<BannerDataProps>[] = [
  {
    accessorKey: "select",
    header: "Select",
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
