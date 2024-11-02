import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardNavbar from "./_components/dashboard-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardNavbar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
