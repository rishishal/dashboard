import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function SizeSelector() {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-lg font-medium">Size</h3>

      <ToggleGroup
        className="flex gap-4 child:rounded-lg"
        type="multiple"
        defaultValue={["medium"]}
      >
        <ToggleGroupItem
          className="border border-gray-200 text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          value="xs"
          aria-label="Toggle small"
        >
          <span>XS</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="border border-gray-200 text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          value="s"
          aria-label="Toggle medium"
        >
          <span>S</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="border border-gray-200 text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          value="m"
          aria-label="Toggle large"
        >
          <span>M</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="border border-gray-200 text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          value="xl"
          aria-label="Toggle large"
        >
          <span>XL</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="border border-gray-200 text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          value="xxl"
          aria-label="Toggle large"
        >
          <span>XXL</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
