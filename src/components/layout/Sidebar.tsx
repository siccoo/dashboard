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
        navIsOpen ? "left-0" : "left-[-50000px]"
      )}
      onClick={() => dispatch(toggleNav(false))}
    >
      <div
        className="w-[300px] h-full bg-transparent px-4 overflow-auto"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <section className="bg-transparent">
          <article className="py-4 laptop:hidden">
            <button
              className="text-2xl"
              onClick={() => dispatch(toggleNav(false))}
            >
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
          }}
        >
          <button
            onClick={handleLogout}
            className="mt-5 rounded-[48px] px-[42.5px] py-[12px] border border-[#f14119] text-[#f14119] font-lato font-semibold text-[14px]"
          >
            <span>
              <img
                src="./images/svg/removeIcon.svg"
                alt="remove"
                className="inline mr-2"
              />
            </span>
            Logout
          </button>
        </section>
      </div>
    </nav>
  );
};

export default Sidebar;
