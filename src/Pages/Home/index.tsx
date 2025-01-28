import { Card } from "@/components/ui/card";
import { InfoCards } from "./components/info-card";
import { Ordercolumns } from "./components/Recent-Table/column";
import { RecentData } from "./recentData";
import { RecentDataTable } from "./components/Recent-Table/DataTable";
const DasboardHome = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex justify-start gap-6">
        <InfoCards />
      </div>

      <Card className="space-y-4 p-4">
        <h2 className="font-bold text-2xl text-primary/85">Recent Order</h2>
        <RecentDataTable data={RecentData} columns={Ordercolumns} />
      </Card>
    </div>
  );
};

export default DasboardHome;
