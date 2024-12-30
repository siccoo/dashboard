import clsx from "clsx";
import QadaLogo from "./QadaLogo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { FaBars } from "react-icons/fa6";
import { toggleNav } from "../../features/moduleGeneralSlice";

const Header = () => {
  const { navIsOpen } = useSelector((store: RootState) => store.moduleGeneral);
  const dispatch = useDispatch();

  return (
    <header
      className={clsx("shadow-md")}
      style={{ backgroundColor: "white", paddingTop: "10px" }}
    >
      <div className="w-[95%] mx-auto py-2 flex items-center tablet:py-4">
        <div className="flex flex-1 sm:items-center justify-between sm:justify-normal">
          <div className="flex items-center gap-4">
            {!navIsOpen && (
              <button
                className="text-2xl text-[#F14119] laptop:hidden ml-3"
                onClick={() => dispatch(toggleNav(true))}
              >
                <FaBars />
              </button>
            )}
            <div className="hidden sm:block">
              <QadaLogo />
            </div>
          </div>
          <div className="flex-1 hidden sm:flex justify-center">
            {/* <input
              type="text"
              placeholder="Search..."
              className="w-[60%] max-w-[500px] p-2 pl-6 border border-gray-300 rounded"
              style={{ borderRadius: "20px" }}
            /> */}
          </div>
          <div className="flex justify-between items-center gap-4 mr-3">
            <div>
              <span className="text-sm">English</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Qatalog Admin</span>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
