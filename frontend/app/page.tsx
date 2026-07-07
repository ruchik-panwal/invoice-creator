"use client";
import SearchTab from "@/components/homePage/search/SearchTab";
import ProfileTab from "@/components/homePage/ProfileTab";
import SortFilter from "@/components/homePage/SortFilter";
import InvoiceList from "@/components/homePage/InvoiceList";
import CreateInvBtn from "@/components/homePage/CreateInvBtn";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string>("All");

  function termClick(term: string) {
    setSelected(term);
  }

  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col max-w-[12vw] h-full border-r-3 border-accent ">
        <SearchTab selected={selected} termClick={termClick} />
        <ProfileTab />
      </div>
      <div className="h-full w-full flex flex-col item-center">
        <InvoiceList selected={selected}/>
        <CreateInvBtn />
      </div>
    </div>
  );
}
