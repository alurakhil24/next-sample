import React from "react";
import { ReactNode } from "react";

const Cards: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap mx-2 px-72 ${className}`}>{children}</div>
  );
};

export default Cards;
