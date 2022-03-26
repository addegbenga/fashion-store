import React from "react";

type myType = {
  children: React.ReactNode;
  height?: number;
  width: number;
  background?: string;
  color?: string;
};
export default function Cards({
  children,
  height,
  width,
  background,
  color,
}: myType) {
  return (
    <div
      // className={`h-[${height}rem] md:h-full`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: `${width}%`,
        background: color,
      }}
    >
      {children}
    </div>
  );
}
