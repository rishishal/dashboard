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
      title: "Products",
      icon: ChartNoAxesCombined,
      url: "/products",
      isActive: true,
    },
    {
      title: "Category",
      icon: LayoutDashboard,
      items: [
        {
          title: "Category List",
          url: "/category/list",
        },
        {
          title: "Add Category",
          url: "/category/add",
        },
        {
          title: "Sub Category List",
          url: "/category/sub-category-list",
        },
        {
          title: "Add Sub Category",
          url: "/category/sub-category-add",
        },
      ],
    },
    {
      title: "Banner Slides",
      icon: Images,
      items: [
        {
          title: "Home Banners List",
          url: "/banner-silder",
        },
      ],
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },

    {
      title: "Orders",
      url: "/orders",
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
