import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function GenderRadio() {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-lg font-medium">Gender</h3>

      <RadioGroup defaultValue="woman" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="men" id="men" />
          <Label htmlFor="men">Men</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="woman" id="woman" />
          <Label htmlFor="woman">Woman</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unisex" id="unisex" />
          <Label htmlFor="unisex">Unisex</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
