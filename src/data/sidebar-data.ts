import { AiOutlineFileSync } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import {
  MdOutlineDashboardCustomize,
  MdOutlineInventory2,
} from "react-icons/md";
import { PiUserList, PiUsersBold } from "react-icons/pi";
import { RiBillLine, RiHome5Line } from "react-icons/ri";
import { TbPentagonMinus } from "react-icons/tb";

export const sidebarData = [
  {
    id: "1",
    icon: RiHome5Line,
    label: "Overview",
    link: "/",
  },
  {
    id: "2",
    icon: PiUsersBold,
    label: "Employee Management",
    link: "/",
  },
  {
    id: "3",
    icon: TbPentagonMinus,
    label: "Rooms & Halls",
    link: "/",
  },
  {
    id: "4",
    icon: MdOutlineDashboardCustomize,
    label: "Special Events",
    link: "/",
  },
  {
    id: "5",
    icon: AiOutlineFileSync,
    label: "Orders",
    link: "/",
  },
  {
    id: "6",
    icon: PiUserList,
    label: "Guests",
    link: "/",
  },
  {
    id: "7",
    icon: MdOutlineInventory2,
    label: "Inventories",
    link: "/",
  },
  {
    id: "8",
    icon: CiMoneyBill,
    label: "Finance",
    link: "/",
  },
  {
    id: "9",
    icon: RiBillLine,
    label: "Billing",
    link: "/",
  },
  {
    id: "10",
    icon: GoGear,
    label: "Settings",
    link: "/",
  },
];