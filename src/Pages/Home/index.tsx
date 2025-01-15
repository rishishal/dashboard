import { InfoCards } from "./components/info-card";
import { columns } from "./components/RecentTable/columns";
import { DataTable } from "./components/RecentTable/DataTable";
import { RecentOrder } from "./orderDataDb";

const DasboardHome = () => {
  return (
    <div className="flex flex-col gap-10  p-6">
      <div className="flex justify-start gap-6">
        <InfoCards />
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-primary/85">Recent Order</h2>
        <DataTable data={RecentOrder} columns={columns} />
      </div>
    </div>
  );
};

export default DasboardHome;
