import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProductCategory() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="px-6 py-5 rounded-full text-sm">
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="category">Category Name</Label>
          <Input id="category" placeholder="Enter category" />
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit">Save changes</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
