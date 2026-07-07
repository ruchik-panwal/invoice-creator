"use client";
import { useRef, useState } from "react";
import SearchIcon from "@/components/Icons/SearchIcon";

export default function SearchBar({ setValue }) {
  const inputRef = useRef(null);

  function searchClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <div
      className="flex gap-2 border border-accent px-1 py-1 select-text"
      onClick={searchClick}
    >
      <SearchIcon className="text-accent w-7 h-7 select-text" strokeWidth={3} />
      <input
        ref={inputRef}
        onChange={(event) => setValue(event.target.value)}
        name="myInput"
        className=" w-full font-funnel-sans text-foreground  text-[1.125rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 p-0 m-0 rounded-none border-b border-accent"
      />
    </div>
  );
}
