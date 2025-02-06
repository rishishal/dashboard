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
      url: "/dashboard/products",
      isActive: true,
    },
    {
      title: "Category",
      icon: LayoutDashboard,
      items: [
        {
          title: "Category List",
          url: "/dashboard/category/list",
        },
        {
          title: "Add Category",
          url: "/dashboard/category/add",
        },
        {
          title: "Sub Category List",
          url: "/dashboard/category/sub-category-list",
        },
        {
          title: "Add Sub Category",
          url: "/dashboard/category/sub-category-add",
        },
      ],
    },
    {
      title: "Banner Slides",
      icon: Images,
      items: [
        {
          title: "Home Banners List",
          url: "/dashboard/banner-silder",
        },
      ],
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: Users,
    },

    {
      title: "Orders",
      url: "/dashboard/orders",
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
