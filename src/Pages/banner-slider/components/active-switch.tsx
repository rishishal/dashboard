import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function ActiveSwitch({ activeStatus }: { activeStatus: boolean }) {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const handleSwitch = async (checked: boolean) => {
    setIsActive(checked);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("active", checked.toString()); // Convert boolean to string

      const response = await fetch("/api/banner-status", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update switch status");
      }

      console.log("Switch status updated:", checked);
    } catch (error) {
      console.error(error);
      setIsActive((prev) => !prev); // Revert state in case of error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isActive}
        onCheckedChange={handleSwitch}
        disabled={loading}
      />
      {loading && <span className="text-sm text-gray-500">Updating...</span>}
    </div>
  );
}
