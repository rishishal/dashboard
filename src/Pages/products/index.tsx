import { Card } from "@/components/ui/card";
import { columns } from "./components/Product-Table/columns";
import { DataTable } from "./components/Product-Table/DataTable";
import { ProductData } from "@/Pages/Home/ProductData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="py-10 space-y-4">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-primary/85">Products List</h2>
        <Link to="/products/product-upload">
          <Button>+ Add Product</Button>
        </Link>
      </div>
      <Card className="shadow-none">
        <DataTable data={ProductData} columns={columns} />
      </Card>
    </div>
  );
};

export default ProductList;
