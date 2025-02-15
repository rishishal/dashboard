import { BannerTable } from "./components/banner-table";
import { BannnerData } from "./bannerData";
import { Bannercolumns } from "./components/banner-columns";

const BanneSlider = () => {
  return (
    <div>
      <BannerTable data={BannnerData} columns={Bannercolumns} />
    </div>
  );
};

export default BanneSlider;
