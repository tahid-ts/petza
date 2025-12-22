import { memo } from "react";
import { Truck } from "lucide-react";

interface CartProgressBarSectionProps {
  progressPercentage: number;
}

export const CartProgressBarSection = memo(function CartProgressBarSection({
  progressPercentage,
}: CartProgressBarSectionProps) {
  return (
    <div className="relative mb-4">
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-0 -ml-5"
        style={{ left: `${progressPercentage}%` }}
      >
        <Truck
          className={`text-white bg-primary p-1 h-6 w-6 rounded transition-all duration-500  `}
          size={20}
        />
      </div>
    </div>
  );
});
