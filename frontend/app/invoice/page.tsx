import ListForms from "@/components/InvPage/ListForms";
import InfoForms from "@/components/InvPage/InfoForms"
import PreviewWindow from "@/components/InvPage/LivePreview/PreviewWindow"

export default function NewInvoice() {
  return (
    <div className="uppercase h-full w-full flex text-background">
      <div className="h-full w-full flex items-center border-r-3 border-accent ">
        <InfoForms />
        <ListForms />
      </div>

      <div className="flex justify-center items-center h-full p-10">
       <PreviewWindow />
      </div>
    </div>
  );
}
