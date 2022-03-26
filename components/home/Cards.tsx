import React from "react";

type myType = {
  children: React.ReactNode;
  height?: number;
  width: number;
  background?: string;
  color?: string;
};
export default function Cards({ children, width, background, color }: myType) {
  return (
    <div
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
