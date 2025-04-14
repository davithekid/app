"use client";

import { use, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Catalogo({ genreId }) {
  const catalogoHq = [
    { id: 1, name: "attack on titan", img: "/aot.jpg" },
    { id: 2, name: "mnha", img: "/bokunohero.webp" },
    { id: 3, name: "naruto", img: "/naruto.jpg" },
    { id: 4, name: "demon slayer", img: "/demonslayer.webp" },
    { id: 5, name: "berserk", img: "/berserk.webp" },
    { id: 6, name: "bleach", img: "/bleach.jpg" },
    { id: 7, name: "viland saga", img: "/viland.jpg" },
  ];

  return <ComicList genreId={genreId} catalogoHq={catalogoHq} />;
}

function ComicList({ genreId, catalogoHq }) {
  const elementRef = useRef(null);

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };


  return (
    <>
      <div className="relative">
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className="text-[40px] p-2 cursor-pointer z-10 absolute left-2 top-1/2 -translate-y-1/2 lg:hidden bg-black rounded-full shadow-md"
        />

        <div ref={elementRef} className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-5 pb-5 mt-5 scroll-smooth">
          {catalogoHq.map((hq) => (
            <img
              key={hq.id}
              src={hq.img}
              alt={hq.name}
              className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] scrollbar-none border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
            />
          ))}
        </div>

        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className="text-[40px] p-2 cursor-pointer z-10 absolute right-2 top-1/2 lg:hidden -translate-y-1/2 bg-black rounded-full shadow-md"
        />
      </div>
    </>
  );
}
