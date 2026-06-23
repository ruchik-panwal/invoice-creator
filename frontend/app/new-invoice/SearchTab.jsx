import SearchBar from "./SearchBar";
import SearchTerms from "./searchTerms";

export default function SearchTab() {
  return (
    <div className="w-full h-full flex flex-col p-2.5">
      <SearchBar />
      <SearchTerms />
    </div>
  );
}
