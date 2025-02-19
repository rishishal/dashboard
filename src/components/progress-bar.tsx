import { CircleCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ProgressBar() {
  const steps = [
    "The Invoice is created",
    "The Invoice sent to the customer",
    "The order is shipped",
    "The order is delivered",
  ];
  const completedDates = [
    "April 23, 2023",
    "April 24, 2023",
    "April 25, 2023",
    "April 26, 2023",
  ];
  const currentStep = 2;

  // Calculate the width of the progress bar based on the current step
  const progressWidth = (100 / (steps.length - 1)) * currentStep;

  return (
    <div className="relative flex items-center justify-between">
      <Separator orientation="vertical" className="h-64 w-2 rounded-md" />
      <Separator
        orientation="vertical"
        className="absolute top-0 w-2 rounded-md bg-green-500"
        style={{ height: `calc(${progressWidth}% - 28px)` }}
      />
      <div className="absolute flex flex-col top-0 -left-2 gap-14 rounded-full">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          return (
            <div key={step} className="flex items-center gap-2">
              <CircleCheck
                className={`bg-white ${
                  isCompleted ? "text-green-500" : "text-slate-400"
                }`}
              />
              <span
                className={`text-sm font-semibold ${
                  isCompleted ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-16 mt-1">
        {completedDates.map((date) => (
          <span className="text-xs text-gray-500">{date}</span>
        ))}
      </div>
    </div>
  );
}
