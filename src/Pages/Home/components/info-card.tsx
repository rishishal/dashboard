import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ChartPie, Landmark } from "lucide-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";

export function InfoCards() {
  const cardArray = [
    {
      icon: AiOutlineShoppingCart,
      name: "sales",
      value: "3,456",
      DynamicValue: "0.43",
    },
    { icon: ChartPie, value: "57,890", DynamicValue: "-4.40" },
    { icon: Landmark, value: "12,390", DynamicValue: "+32.40" },
    { icon: MdOutlineShoppingBag, value: "3.456K", DynamicValue: "0.43" },
  ];

  return (
    <Card className="w-72">
      <CardContent className="p-4 space-y-4">
        <div className="bg-gray-200 rounded-full size-10 flex justify-center items-center">
          <AiOutlineShoppingCart className="w-6 h-6" />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xl">$3.456K</p>
            <span className="text-sm">Total views</span>
          </div>
          <div className="flex items-center text-green-500">
            <span>0.43%</span> <ArrowUp className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
