import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type FilterAreaProps = {
  selectedStatuses: string[];
  setSelectedStatuses: Dispatch<SetStateAction<string[]>>;
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
};

export function FilterArea({
  selectedStatuses,
  setSelectedStatuses,
  selectedCategories,
  setSelectedCategories,
}: FilterAreaProps) {
  return (
    <div className="flex gap-3">
      {/* status */}
      {selectedStatuses.length > 0 && (
        <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
          <span className="text-gray-600">Status</span>
          <Separator orientation="vertical" />
          <div className="flex gap-2 items-center">
            {selectedStatuses.length < 3 ? (
              <>
                {selectedStatuses.map((status, index) => (
                  <Badge key={index} variant="secondary">
                    {status}
                  </Badge>
                ))}
              </>
            ) : (
              <>
                <Badge variant="secondary">3 Selected</Badge>
              </>
            )}
          </div>
        </div>
      )}

      {/* category */}

      {selectedCategories.length > 0 && (
        <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
          <span className="text-gray-600">Category</span>
          <Separator orientation="vertical" />
          <div className="flex gap-2 items-center">
            {selectedCategories.length < 3 ? (
              <>
                {selectedCategories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </>
            ) : (
              <>
                <Badge variant="secondary">3 Selected</Badge>
              </>
            )}
          </div>
        </div>
      )}
      {(selectedCategories.length > 0 || selectedStatuses.length > 0) && (
        <Button
          variant="ghost"
          className="p-1 px-1"
          onClick={() => {
            setSelectedCategories([]);
            setSelectedStatuses([]);
          }}
        >
          <span>Reset</span>
          <IoClose />
        </Button>
      )}
    </div>
  );
}
