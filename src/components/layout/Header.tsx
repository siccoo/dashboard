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
          <div className="flex-1 hidden sm:flex justify-center"></div>
          <div className="flex justify-between items-center gap-4">
            {/* Center: Language Selector */}
            <div className="flex items-center gap-2 mr-4">
              <img
                src="/images/svg/ngIcon.svg"
                alt="Flag"
                className="w-5 h-5"
              />
              <select
                className="bg-transparent border-none text-[#323233] cursor-pointer focus:outline-none font-lato font-semibold text-[14px] leading-6"
                defaultValue="English"
              >
                <option value="English">English</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  src="/images/svg/profileAvatar.svg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-white border-2 rounded-full"></span>
              </div>
              <span className="font-lato font-semibold text-base leading-6">Qataloog Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
