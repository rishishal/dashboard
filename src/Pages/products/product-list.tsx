import { Card } from "@/components/ui/card";
import { columns } from "./components/Product-Table/columns";
import { DataTable } from "./components/Product-Table/DataTable";
import { ProductData } from "@/Pages/Home/ProductData";
const ProductList = () => {
  return (
    <div className="py-10">
      <Card className="space-y-4 p-4">
        <h2 className="font-bold text-2xl text-primary/85">Products List</h2>
        <DataTable data={ProductData} columns={columns} />
      </Card>
    </div>
  );
};

export default ProductList;
