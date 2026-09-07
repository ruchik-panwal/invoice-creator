import Form from "@/components/InvPage/InputComp";

export default function InfoForms({ invoiceData, setInvoiceData }) {
  const titles = ["date", "from", "to", "miscellaneous"];

  return (
    <div className="flex flex-col gap-4 h-full w-full p-4 overflow-y-scroll">
      {titles.map((title, ind) => {
        return (
          <Form
            title={title}
            key={ind}
            invoiceData={invoiceData}
            setInvoiceData={setInvoiceData}
          />
        );
      })}
    </div>
  );
}