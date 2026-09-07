"use client";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ListForms({ invoiceData, setInvoiceData }) {
  function handleAddList() {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { description: "", hours: 0, rate: 0, amount: 0 },
      ],
    }));
  }

  function handleDeleteList(indexToRemove) {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, idx) => idx !== indexToRemove),
    }));
  }

  function handleItemChange(index, field, value) {
    setInvoiceData((prev) => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [field]: value };

      // If user updates hours or rate, auto-calculate the amount
      if (field === "hours" || field === "rate") {
        const hours = parseFloat(newItems[index].hours) || 0;
        const rate = parseFloat(newItems[index].rate) || 0;
        
        // Only override the amount if they are actually using hours/rate
        if (hours > 0 || rate > 0) {
          newItems[index].amount = hours * rate;
        }
      }

      return { ...prev, items: newItems };
    });
  }

  return (
    <div className="flex flex-col justify-between items-center h-full w-full border-l border-accent">
      <div className="flex flex-col gap-4 items-center h-full w-full p-4 overflow-y-auto">
        {invoiceData?.items?.map((item, index) => (
          <ListForm
            key={index}
            ind={index + 1}
            item={item}
            onDelete={() => handleDeleteList(index)}
            onChange={(field, value) => handleItemChange(index, field, value)}
          />
        ))}
      </div>
      <div className="h-[8vh] w-full border-t border-accent p-2 flex justify-end gap-4 items-center">
        <button
          className="bg-accent text-background font-medium h-full px-4 rounded-sm"
          onClick={handleAddList}
        >
          Add Item
        </button>
        <button className="bg-green-500 text-white font-medium h-full px-4 rounded-sm">
          Done
        </button>
      </div>
    </div>
  );
}

function ListForm({ ind, item, onDelete, onChange }) {
  // Removed the readOnly: true from the Amount field so you can type directly into it
  const labelArr = [
    { label: "Description", name: "description", type: "text" },
    { label: "Hours", name: "hours", type: "number" },
    { label: "Rate", name: "rate", type: "number" },
    { label: "Amount", name: "amount", type: "number" }, 
  ];

  return (
    <div className="w-full border-2 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2 cursor-pointer">
        <p>{"Item " + ind}</p>
        <div className="flex justify-between text-[1.4rem] gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <RiDeleteBin6Line className="hover:text-red-500 transition-colors" />
          </button>
          <button>
            <IoIosArrowDropdown />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
        {labelArr.map((field, index) => {
          return (
            <ListInputComp
              key={index}
              title={field.label}
              type={field.type}
              value={item[field.name]}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          );
        })}
      </div>
    </div>
  );
}

function ListInputComp({ title, type, value, onChange }) {
  return (
    <div className="flex gap-2 w-full text-[1rem]">
      <h1 className="w-38">{title + ":"}</h1>

      <input
        className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent disabled:opacity-60"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}