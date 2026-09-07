"use client";
import { useState } from "react";
import ListForms from "@/components/InvPage/ListForms";
import InfoForms from "@/components/InvPage/InfoForms";
import PreviewWindow from "@/components/InvPage/LivePreview/PreviewWindow";

const skeletonInvData = {
  id: "",
  status: false,
  dateCreated: "",
  dateDue: "",
  customerId: "",
  GSTpercent: 0,
  discountPercent: 0,
  subTotal: 0.0,
  discountAmount: 0,
  taxAmount: 0,
  totalAmount: 0.0,
  paidAmount: 0.0,
  balanceDue: 0.0,
  items: [
    {
      description: "",
      hours: 0,
      rate: 0,
      amount: 0,
    },
  ],
};

export default function NewInvoice() {
  // Global state for the entire invoice page
  const [invoiceData, setInvoiceData] = useState(skeletonInvData);

  return (
    <div className="uppercase h-full w-full flex text-background">
      <div className="h-full w-full flex items-center border-r-3 border-accent ">
        {/* Pass the state down as props */}
        <InfoForms invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
        <ListForms invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      </div>

      <div className="flex justify-center items-center h-full p-10">
        {/* You will likely want to pass invoiceData to the preview window too */}
        <PreviewWindow invoiceData={invoiceData} />
      </div>
    </div>
  );
}