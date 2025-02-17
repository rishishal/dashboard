import { Switch } from "@/components/ui/switch";

export function ActiveSwitch({ activeStatus }: { activeStatus: boolean }) {
  const handleSwitch = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Switch onCheckedChange={handleSwitch} />
    </div>
  );
}
