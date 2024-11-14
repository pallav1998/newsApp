import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../AppSideBar/page";

export default function Header() {
  return (
    <header className="h-14 shadow-md shadow-gray-500/50 flex justify-center align-middle mb-6">
      <SidebarProvider className="" defaultOpen={false}>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>

      <strong className="font-extrabold text-3xl mt-2 absolute">
        News App
      </strong>
    </header>
  );
}
