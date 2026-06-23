"use client";
import { useRef } from "react";
import SearchIcon from "@/components/Icons/SearchIcon";

export default function SearchBar() {
  const inputRef = useRef(null);

  function searchClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <div
      className="flex gap-2 border border-accent px-1 py-2 select-text"
      onClick={searchClick}
    >
      <SearchIcon className="text-accent w-9 select-text" strokeWidth={3} />
      <input
        ref={inputRef}
        name="myInput"
        className=" w-full font-funnel-sans text-foreground  text-[1.125rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 p-0 m-0 rounded-none border-b border-accent"
      />
    </div>
  );
}
