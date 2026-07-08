"use client";
import { RiDeleteBin6Line, RiDownloadLine } from "react-icons/ri";
import InvoiceHeadings from "@/components/homePage/InvoiceHeadings";
import invoices from "@/database/Invoices";
import sortInvoice from "@/components/homePage/InvoiceSorter";
import clients from "@/database/ClientInfo";
import { useEffect, useState } from "react";

export default function InvoiceList({ selected }) {
  const [sortObj, setSortObj] = useState({ type: "invNum", status: true });
  let sortedInv = sortInvoice(invoices, sortObj);

  function setSortType(term) {
    const newType = { ...term };
    setSortObj(newType);
  }

  useEffect(() => {
    sortedInv = sortInvoice(invoices, sortObj);
  }, [sortObj]);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <InvoiceHeadings setSortType={setSortType} sortObj={sortObj}/>
      <div className="w-full h-[4vh] border-b border-accent"></div>
      {sortedInv.map((inv, ind) => {
        return inv.customerId == selected && <Invoice key={ind} inv={inv} />;
      })}

      {selected == "All" &&
        sortedInv.map((inv, ind) => {
          return <Invoice key={ind} inv={inv} />;
        })}
    </div>
  );
}

function Invoice({ inv }) {
  return (
    <div className="w-full h-[4vh] select-none text-[1.3rem] text-foreground uppercase tracking-[-5%] font-light flex items-center border-b border-accent px-3">
      <h1 className="flex-2/10">{inv.id}</h1>
      <h1 className="flex-3/10">{inv.status ? "Paid" : "Not Paid"}</h1>
      {clients.map((client, ind) => {
        return (
          inv.customerId == client.id && (
            <h1 key={ind} className="flex-9/10">
              {client.name}
            </h1>
          )
        );
      })}
      <h1 className="flex-3/10 text-center">{inv.dateCreated}</h1>
      <h1 className=" flex-3/10 text-center">{inv.dateDue}</h1>
      <h1 className="flex-4/10 text-end tracking-[1%]">
        {inv.totalAmount.toFixed(2)}
      </h1>
      <div className="flex-2/10 flex items-center justify-end gap-2 h-full w-full text-end">
        <button className="flex justify-center items-center h-full">
          <RiDownloadLine />
        </button>
        <button className="flex justify-center items-center  h-full">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
