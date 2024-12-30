import clsx from "clsx";

export const logoSize = (size: string) => {
  const imgSize = clsx({
    "w-[20px]": size === "sm",
    "w-[25px]": size === "md",
    "w-[30px]": size === "lg",
  });

  const textSize = clsx({
    "text-[14px]": size === "sm",
    "text-[16px]": size === "md",
    "text-[18px]": size === "lg",
  });

  return { imgSize, textSize };
};