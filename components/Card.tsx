import React from "react";
import { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full px-2">
      <div className="bg-white px-4 py-4 flex my-2 rounded-lg shadow">
        <div className="w-24 pr-5">
          <a href="#" className="mb-4">
            <img className="rounded" src="https://picsum.photos/200" />
          </a>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-gray-700 my-0">{children}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
