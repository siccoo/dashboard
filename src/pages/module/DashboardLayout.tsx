import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/Sidebar";

const DashboardLayout = () => {
  

  return (
    <div>
      <Header />
      <div className="bg-base-main h-[calc(100vh-55px)] laptop:flex">
        <SideBar />
        <div className="overflow-x-hidden w-full h-full scrollbar-none bg-base-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
