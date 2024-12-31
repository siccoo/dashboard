import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleNav } from "../../features/moduleGeneralSlice";
import { MouseEvent } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import SideBarItem from "./SidebarItems";
import { sidebarData } from "../../data/sidebar-data";

const Sidebar = () => {
  const { navIsOpen } = useSelector((store: RootState) => store.moduleGeneral);
  const dispatch = useDispatch();

  const handleLogout = () => {};


  return (
    <nav
      className={clsx(
        "w-full h-full fixed top-0 z-10 transition-all bg-base-black/50 laptop:static laptop:h-full laptop:w-[300px]",
        navIsOpen ? "left-0" : "left-[-5000px]"
      )}
      onClick={() => dispatch(toggleNav(false))}>
      <div
        className="w-[300px] h-full bg-transparent px-4 overflow-auto"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <section className="bg-transparent">
          <article className="py-4 laptop:hidden">
            <button
              className="text-2xl"
              onClick={() => dispatch(toggleNav(false))}>
              <LiaTimesSolid />
            </button>
          </article>

          <div className="flex flex-col gap-3 py-4">
            {sidebarData.map((item) => (
              <SideBarItem item={item} key={item.id} />
            ))}
          </div>
        </section>

        <section
          style={{
            display: "flex",
            color: "red",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "22px",
          }}>
          {/* <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}>
            <path
              d="M12.6 1.5H10.65C8.25 1.5 6.75 3 6.75 5.4V8.4375H11.4375C11.745 8.4375 12 8.6925 12 9C12 9.3075 11.745 9.5625 11.4375 9.5625H6.75V12.6C6.75 15 8.25 16.5 10.65 16.5H12.5925C14.9925 16.5 16.4925 15 16.4925 12.6V5.4C16.5 3 15 1.5 12.6 1.5Z"
              fill="red"
            />
            <path
              d="M3.42008 8.43836L4.97258 6.88586C5.08508 6.77336 5.13758 6.63086 5.13758 6.48836C5.13758 6.34586 5.08508 6.19586 4.97258 6.09086C4.75508 5.87336 4.39508 5.87336 4.17758 6.09086L1.66508 8.60336C1.44758 8.82086 1.44758 9.18086 1.66508 9.39836L4.17758 11.9109C4.39508 12.1284 4.75508 12.1284 4.97258 11.9109C5.19008 11.6934 5.19008 11.3334 4.97258 11.1159L3.42008 9.56336H6.75008V8.43836H3.42008Z"
              fill="red"
            />
          </svg> */}

          <button onClick={handleLogout}>Logout</button>
        </section>
      </div>
    </nav>
  );
};

export default Sidebar;
