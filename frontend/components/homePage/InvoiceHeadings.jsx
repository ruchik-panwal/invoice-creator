import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";

// 1. Define your heading configurations in an array
const headingConfig = [
  { name: "No", flexClass: "flex-[2]", align: "start", sortName: "invNum" },
  { name: "Status", flexClass: "flex-[3]", align: "start", sortName: "status" },
  { name: "Name", flexClass: "flex-[9]", align: "start", sortName: "name" },
  { name: "Date", flexClass: "flex-[3]", align: "center", sortName: "date" },
  { name: "Due", flexClass: "flex-[3]", align: "center", sortName: "due" },
  { name: "Amount", flexClass: "flex-[4]", align: "end", sortName: "amount" },
];

export default function InvoiceHeadings({ setSortType, sortObj }) {
  return (
    <div className="w-full h-[4vh] text-[1.2rem] text-accent uppercase tracking-[-5%] font-light flex items-center border-b border-accent px-3">
      {headingConfig.map((heading) => (
        <SortBtn
          key={heading.name} // Always include a unique key when mapping in React
          name={heading.name}
          flexClass={heading.flexClass}
          align={heading.align}
          setSortType={setSortType}
          sortName={heading.sortName}
          sortObj={sortObj}
        />
      ))}

      {/* Note: I updated this to flex-[2] for consistency with Tailwind's arbitrary values */}
      <div className="flex-2"></div>
    </div>
  );
}

function SortBtn({ name, flexClass, align, setSortType, sortName, sortObj }) {
  const [sortToggle, setSortToggle] = useState(true);

  function setObj(newName) {
    sortToggle ? setSortToggle(false) : setSortToggle(true);
    const obj = {
      type: newName,
      status: sortToggle,
    };

    return obj;
  }

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <button
      onClick={() => setSortType(setObj(sortName))}
      className={` flex items-center gap-0.5 ${flexClass} ${justifyMap[align]} ${sortObj.type == sortName ? "text-foreground" : "text-accent" }`}
    >
      <span>{name}</span>
      <MdArrowUpward className={`text-[0.8rem] ${sortObj.status ? "rotate-180" : ""} ${sortObj.type == sortName ? "opacity-100" : "opacity-0" }`}/>
    </button>
  );
}
