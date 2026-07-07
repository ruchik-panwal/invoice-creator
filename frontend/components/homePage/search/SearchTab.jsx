import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchTerms from "./searchTerms";

export default function SearchTab({ selected, termClick }) {
    const [value, setValue] = useState("");

  return (
    <div className="w-full h-full flex flex-col gap-4 p-2.5">
      <SearchBar setValue={setValue} />
      <SearchTerms value={value} selected={selected} termClick={termClick} />
    </div>
  );
}
