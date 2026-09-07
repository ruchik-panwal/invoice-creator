"use client";
import { useState, useEffect } from "react";
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
  const [invoiceData, setInvoiceData] = useState(skeletonInvData);

  // Centralized calculation: Runs automatically when items or percentages change
  useEffect(() => {
    const subTotal = invoiceData.items.reduce(
      (sum, item) => sum + (item.amount || 0),
      0
    );

    const discountPercent = invoiceData.discountPercent || 0;
    const GSTpercent = invoiceData.GSTpercent || 0;
    const paidAmount = invoiceData.paidAmount || 0;

    const discountAmount = subTotal * (discountPercent / 100);
    const taxAmount = (subTotal - discountAmount) * (GSTpercent / 100);
    const totalAmount = subTotal - discountAmount ;
    const balanceDue = totalAmount - paidAmount;

    // Only update state if values actually changed to prevent infinite loops
    if (
      invoiceData.subTotal !== subTotal ||
      invoiceData.discountAmount !== discountAmount ||
      invoiceData.taxAmount !== taxAmount ||
      invoiceData.totalAmount !== totalAmount ||
      invoiceData.balanceDue !== balanceDue
    ) {
      setInvoiceData((prev) => ({
        ...prev,
        subTotal,
        discountAmount,
        taxAmount,
        totalAmount,
        balanceDue,
      }));
    }
  }, [
    invoiceData.items,
    invoiceData.discountPercent,
    invoiceData.GSTpercent,
    invoiceData.paidAmount,
  ]);

  return (
    <div className="uppercase h-full w-full flex text-background">
      <div className="h-full w-full flex items-center border-r-3 border-accent ">
        <InfoForms invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
        <ListForms invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      </div>

      <div className="flex justify-center items-center h-full p-10">
        <PreviewWindow invoiceData={invoiceData} />
      </div>
    </div>
  );
}