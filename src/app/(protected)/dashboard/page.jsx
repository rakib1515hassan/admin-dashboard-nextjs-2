import MainContainer from "@/components/layout/main-container/MainContainer";
import MainLayout from "@/components/layout/main-layout/MainLayout";
import DashboardCard from "@/components/pages/dashboard/DashboardCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <MainContainer>
        <div className="bg-red-500">
          <DashboardCard />
        </div>
      </MainContainer>
    </MainLayout>
  );
}
