import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { toggleNav } from "../../features/moduleGeneralSlice";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const SidebarItem = ({ item }: { item: any }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = () => {
    if (location.pathname !== item.link) {
      if (hoverRef.current) {
        hoverRef.current.style.left = "0";
        hoverRef.current.style.width = "100%";
      }
    }
  };

  const handleMouseLeave = () => {
    if (location.pathname !== item.link) {
      if (hoverRef.current) {
        hoverRef.current.style.left = "unset";
        hoverRef.current.style.right = "0";
        hoverRef.current.style.width = "0";
      }
    }
  };

  return (
    <>
      <div className="mt-2">
        <Link
          to={item.link}
          onClick={() => {
            if (item.children) {
              setIsExpanded(!isExpanded);
            } else {
              dispatch(toggleNav(false));
            }
          }}
          className={clsx(
            "flex gap-2 items-center py-[4px] px-6 rounded-lg relative overflow-hidden cursor-pointer",
            location.pathname === item.link
              ? "bg-transparent text-black"
              : "bg-transparent text-gray"
          )}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <item.icon />
          <span>{item.label}</span>
          {item.children && (
            <span className="ml-auto">
              {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
            </span>
          )}
        </Link>
      </div>

      {item.children && isExpanded && (
        <div className="pl-8">
          {item.children.map((child: any) => (
            <Link
              to={child.link}
              key={child.id}
              className={clsx(
                "mt-2 flex gap-2 items-center py-2 px-6 rounded-lg relative overflow-hidden cursor-pointer",
                location.pathname === child.link
                  ? "bg-white text-black"
                  : "bg-white text-gray"
              )}
              onClick={() => dispatch(toggleNav(false))}
            >
              <child.icon />
              <span>{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
