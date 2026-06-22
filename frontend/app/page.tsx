import SearchTab from "@/components/homePaege/search/SearchTab";
import ProfileTab from "@/components/homePaege/ProfileTab";

export default function Home() {
  return (
    <div className="bg-amber-200 h-full w-full flex">
      <div className="flex flex-col w-[15vw] h-full border-r-3 border-accent ">
        <SearchTab />
        <ProfileTab />
      </div>
      <div className="w-full">
        <div></div>
        <div></div>
        <button></button>
      </div>
    </div>
  );
}
