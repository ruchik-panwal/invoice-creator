import { RiDeleteBin6Line, RiDownloadLine } from "react-icons/ri";

const data = [
  {
    id: "00101",
    status: false,
    name: "Vighnesh Mithari",
    date: "22-06-2026",
    due: "03-08-2026",
    amount: "₹ 7,000",
  },
  {
    id: "00102",
    status: true,
    name: "Sanchit Gade",
    date: "17-02-2026",
    due: "03-11-2036",
    amount: "₹ 50,000",
  },
];

export default function InvoiceList() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Headings />
      <div className="w-full h-[4vh] border-b border-accent"></div>
      {data.map((inv, ind) => {
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
      <h1 className="flex-9/10">{inv.name}</h1>
      <h1 className="flex-3/10 text-center">{inv.date}</h1>
      <h1 className=" flex-3/10 text-center">{inv.due}</h1>
      <h1 className="flex-4/10 text-end tracking-[1%]">{inv.amount}</h1>
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

function Headings() {
  return (
    <div className="w-full h-[4vh] text-[1.2rem] text-accent uppercase tracking-[-5%] font-light flex items-center border-b border-accent px-3">
      <h1 className="flex-2/10">No</h1>
      <h1 className="flex-3/10">Status</h1>
      <h1 className="flex-9/10">Name</h1>
      <h1 className="flex-3/10 text-center">Date</h1>
      <h1 className=" flex-3/10 text-center">Due</h1>
      <h1 className="flex-4/10 text-end">Amount</h1>
      <div className="flex-2/10 text-end"></div>
    </div>
  );
}
