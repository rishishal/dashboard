import { Card } from "@/components/ui/card";
import { InfoCards } from "./components/info-card";
import { columns } from "./components/Product-Table/columns";
import { DataTable } from "./components/Product-Table/DataTable";
import { ProductData } from "./ProductData";
import { Ordercolumns } from "./components/Recent-Table/column";
import { RecentData } from "./recentData";
import { RecentDataTable } from "./components/Recent-Table/DataTable";
const DasboardHome = () => {
  return (
    <div className="flex flex-col gap-10  p-6">
      <div className="flex justify-start gap-6">
        <InfoCards />
      </div>

      <Card className="space-y-4 p-4">
        <h2 className="font-bold text-2xl text-primary/85">Products</h2>
        <DataTable data={ProductData} columns={columns} />
      </Card>

      <Card className="space-y-4 p-4">
        <h2 className="font-bold text-2xl text-primary/85">Recent Order</h2>
        <RecentDataTable data={RecentData} columns={Ordercolumns} />
      </Card>
    </div>
  );
};

export default DasboardHome;
