import { BannerTable } from "./components/banner-table";
import { BannnerData } from "./bannerData";
import { Bannercolumns } from "./components/banner-columns";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BanneSlider = () => {
  return (
    <div className="py-10 space-y-4">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-primary/85">Banner List</h2>
        <Link to="/dashboard/products/upload">
          <Button>+ New Banner</Button>
        </Link>
      </div>
      <Card className="shadow-none">
        <BannerTable data={BannnerData} columns={Bannercolumns} />
      </Card>
    </div>
  );
};

export default BanneSlider;
