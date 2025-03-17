import React from "react";
import { Item } from "../hooks/useHome";

interface ItemGridProps {
  displayItems: Item[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ displayItems }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 p-0 gap-2 md:gap-4  md:p-4">
      {displayItems.map((item, index) => {
        const sizeClass = (() => {
          if (index % 7 === 0) return "col-span-1 row-span-3";
          if (index % 5 === 1) return "col-span-2 row-span-2";
          if (index % 3 === 2) return "col-span-1 row-span-2";
          return "col-span-1 row-span-1";
        })();

        return (
          <div
            key={item.id}
            className={`relative rounded-xl shadow-xl overflow-hidden ${sizeClass} transition-transform duration-500 ease-out hover:scale-105 group`}
          >
            <img
              src={item.body}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent border-transparent cursor-pointer group-hover:from-black/0 transition-all duration-600"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600">
              <span className="bg-orange-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                ★ {((Math.random() * 2) + 3).toFixed(1)}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80">Lugar destacado</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemGrid;
