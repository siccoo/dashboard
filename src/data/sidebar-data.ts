import {
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { PiChurch } from "react-icons/pi";
import { RiCoupon4Line } from "react-icons/ri";
import { FiGrid, FiSettings, FiFlag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { LuGitMerge } from "react-icons/lu";
import { IoImagesOutline } from "react-icons/io5";
import { RiBankCardLine } from "react-icons/ri";

export const sidebarData = [
  {
    id: "1",
    icon: FiGrid,
    label: "Dashboard",
    link: "/",
  },
  {
    id: "2",
    icon: FaUsers,
    label: "Users",
    link: "/",
  },
  {
    id: "3",
    icon: MdOutlineAdminPanelSettings,
    label: "Admins",
    link: "/",
  },
  {
    id: "4",
    icon: RiCoupon4Line,
    label: "Coupon Codes",
    link: "/",
  },
  {
    id: "5",
    icon: LuGitMerge,
    label: "Academic Levels",
    link: "/",
  },
  {
    id: "6",
    icon: PiChurch,
    label: "Platforms",
    link: "/",
  },
  {
    id: "7",
    icon: FiFlag,
    label: "Countries",
    link: "/",
  },
  {
    id: "8",
    icon: IoImagesOutline,
    label: "Content Type",
    link: "/",
  },
  {
    id: "9",
    icon: RiBankCardLine,
    label: "Withdrawals",
    link: "/",
  },
  {
    id: "10",
    icon: FiSettings,
    label: "Settings",
    link: "/",
  },
];