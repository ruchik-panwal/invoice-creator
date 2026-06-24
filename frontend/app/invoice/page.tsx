import ListForms from "@/components/InvPage/ListForms";
import { IoIosArrowDropdown } from "react-icons/io";

export default function NewInvoice() {
  return (
    <div className="uppercase h-full w-full flex text-background ">
      <div className="h-full w-full flex items-center border-r-3 border-accent">
        <div className="flex flex-col gap-4 h-full w-full p-4">
          <DateForm />
          <FromForm />
          <ToForm />
          <MiscForm />
        </div>

        <ListForms />
      </div>

      <div className="flex justify-center items-center h-full p-10">
        <div className="bg-cyan-500 aspect-[1/1.414] h-full"></div>
      </div>
    </div>
  );
}

function DateForm() {
  return (
    <div className="w-full border-2 max-h-50 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2">
        <p>Dates</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
    </div>
  );
}

function FromForm() {
  return (
    <div className="w-full border-2 max-h-50 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2">
        <p>From</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
    </div>
  );
}

function ToForm() {
  return (
    <div className="w-full border-2 max-h-50 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2">
        <p>To</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
    </div>
  );
}

function MiscForm() {
  return (
    <div className="w-full border-2 max-h-50 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2">
        <p>Miscellaneous</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
    </div>
  );
}
