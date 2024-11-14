import {
  BriefcaseBusiness,
  Clapperboard,
  HeartPulse,
  Volleyball,
  Cpu,
  Badge,
  Microscope
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Business",
    url: `/business`,
    icon: BriefcaseBusiness,
  },
  {
    title: "Entertainment",
    url: "/entertainment",
    icon: Clapperboard,
  },
  {
    title: "General",
    url: "/general",
    icon: Badge,
  },
  {
    title: "Science",
    url: "/science",
    icon: Microscope,
  },
  {
    title: "Health",
    url: "/health",
    icon: HeartPulse,
  },
  {
    title: "Sports",
    url: "/sports",
    icon: Volleyball,
  },
  {
    title: "Technology",
    url: "/technology",
    icon: Cpu,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon style={{ width: "1.5rem", height: "1.5rem" }}/>
                      <span className="text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
