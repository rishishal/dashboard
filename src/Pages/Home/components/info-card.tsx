import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function InfoCards() {
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
