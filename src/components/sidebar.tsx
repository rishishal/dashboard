import * as React from "react";
import {
  ChartNoAxesCombined,
  Users,
  PackageCheck,
  LayoutDashboard,
  Images,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import { MainLogo } from "@/components/main-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Home Slides",
      url: "#",
      icon: Images,
      isActive: true,
      items: [
        {
          title: "Home Banners List",
          url: "#",
        },
        {
          title: "Add Home Banner Slide",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
    },
    {
      title: "Products",
      url: "#",
      icon: ChartNoAxesCombined,
      items: [
        {
          title: "Product List",
          url: "#",
        },
        {
          title: "Product Upload",
          url: "#",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Category List",
          url: "#",
        },
        {
          title: "Add Category",
          url: "#",
        },
        {
          title: "Sub category List",
          url: "#",
        },
        {
          title: "Add Sub Category",
          url: "#",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: PackageCheck,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <MainLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain data={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
