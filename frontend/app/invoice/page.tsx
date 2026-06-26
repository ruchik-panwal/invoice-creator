import ListForms from "@/components/InvPage/ListForms";
import InfoForms from "@/components/InvPage/InfoForms"

export default function NewInvoice() {
  return (
    <div className="uppercase h-full w-full flex text-background">
      <div className="h-full w-full flex items-center border-r-3 border-accent ">
        <InfoForms />
        <ListForms />
      </div>

      <div className="flex justify-center items-center h-full p-10">
        <div className="bg-cyan-500 aspect-[1/1.414] h-full"></div>
      </div>
    </div>
  );
}
