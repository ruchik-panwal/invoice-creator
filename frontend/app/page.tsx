import SearchTab from "@/components/homePaege/search/SearchTab";
import ProfileTab from "@/components/homePaege/ProfileTab";
import SortFilter from "@/components/homePaege/SortFilter";
import InvoiceList from "@/components/homePaege/InvoiceList";
import CreateInvBtn from "@/components/homePaege/CreateInvBtn";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col max-w-[12vw] h-full border-r-3 border-accent ">
        <SearchTab />
        <ProfileTab />
      </div>
      <div className="h-full w-full flex flex-col item-center">
        <SortFilter />
        <InvoiceList />
        <CreateInvBtn />
      </div>
    </div>
  );
}
