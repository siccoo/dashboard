import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const DashboardLayout = () => {
  

  return (
    <div>
      <Header />
      <div className="bg-base-main h-[calc(100vh-55px)] laptop:flex">
        <Sidebar />
        <div className="overflow-x-hidden w-full h-full scrollbar-none bg-base-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
