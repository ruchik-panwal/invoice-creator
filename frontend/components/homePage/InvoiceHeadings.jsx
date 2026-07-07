export default function InvoiceHeadings() {

  const headings = ["No", "Status", "Name"]
  return (
    <div className="w-full h-[4vh] text-[1.2rem] text-accent uppercase tracking-[-5%] font-light flex items-center border-b border-accent px-3">
      <button className="flex-2/10 text-left">No</button>
      <button className="flex-3/10 text-left">Status</button>
      <button className="flex-9/10 text-left">Name</button>
      <button className="flex-3/10 text-center">Date</button>
      <button className=" flex-3/10 text-center">Due</button>
      <button className="flex-4/10 text-end">Amount</button>
      <div className="flex-2/10 text-end"></div>
    </div>
  );
}