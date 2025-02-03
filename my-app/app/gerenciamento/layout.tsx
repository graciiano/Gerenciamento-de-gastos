import SideBar from "@/components/sideBar/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <main className="flex-1 p-4">
        
        <SideBar />
        {children}
      </main>
    </div>
  );
}
