import { IoIosArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ListForms() {
  const parr = ["s", "s", "s"];
  return (
    <div className="flex flex-col justify-between items-center h-full w-full border-l border-accent">
      <div className="flex flex-col gap-4 items-center h-full w-full p-4">
        <ListForm ind={1} />
        <ListForm ind={2} />
      </div>
      <div className="h-[8vh] w-full border-t border-accent"></div>
    </div>
  );
}

function ListForm({ ind }) {
  return (
    <div className="w-full border-2 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2">
        <p>{"List " + ind}</p>
        <div className="flex justify-between text-[1.4rem] gap-1">
          <button>
            <RiDeleteBin6Line />
          </button>
          <button>
            <IoIosArrowDropdown />
          </button>
        </div>
      </div>
    </div>
  );
}
