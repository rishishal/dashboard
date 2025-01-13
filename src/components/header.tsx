import { NavHeader } from "@/components/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex h-16 px-4 justify-between shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-md">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <NavHeader />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaRegBell className="text-lg" />
          <div className="absolute -top-1 right-0 text-[10px] bg-red-500 size-2 rounded-full"></div>
        </div>
        <Avatar className="h-8 w-8 rounded-lg cursor-pointer">
          <AvatarImage src="#" alt="userLogo" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
