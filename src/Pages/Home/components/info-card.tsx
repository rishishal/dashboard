import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUp, ChartPie, Landmark, UsersRound } from "lucide-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";

export function InfoCards() {
  const cardArray = [
    {
      icon: AiOutlineShoppingCart,
      name: "New Orders",
      value: "3,456",
      DynamicValue: "+0.43",
      desc: "Total Order",
    },
    {
      icon: ChartPie,
      name: "Sales",
      value: "57,890",
      DynamicValue: "-4.40",
      desc: "Total Sales",
    },
    {
      icon: Landmark,
      name: "Revenue",
      value: "12,390",
      DynamicValue: "+32.40",
      desc: "Total Profit",
    },
    {
      icon: MdOutlineShoppingBag,
      name: "Stock",
      value: "3.456K",
      DynamicValue: "+0.43",
      desc: "Total Product",
    },
    {
      icon: UsersRound,
      name: "Users",
      value: "3.456K",
      DynamicValue: "+0.63",
      desc: "Total User",
    },
  ];

  return (
    <>
      {cardArray.map((card, index) => (
        <Card key={index} className="w-72">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-5">
              <div className="bg-gray-200 rounded-full size-10 flex justify-center items-center">
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary/80">{card.name}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-xl">{card.value}</p>
                <span className="text-xs text-primary/50">{card.desc}</span>
              </div>
              <div
                className={`flex items-center ${
                  card.DynamicValue.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <span>{card.DynamicValue}</span>{" "}
                <ArrowUp
                  className={cn(
                    "w-4 h-4",
                    card.DynamicValue.startsWith("-") && "rotate-180"
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
