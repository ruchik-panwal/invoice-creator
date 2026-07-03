import SearchTab from "@/components/homePage/search/SearchTab";
import ProfileTab from "@/components/homePage/ProfileTab";
import SortFilter from "@/components/homePage/SortFilter";
import InvoiceList from "@/components/homePage/InvoiceList";
import CreateInvBtn from "@/components/homePage/CreateInvBtn";

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
