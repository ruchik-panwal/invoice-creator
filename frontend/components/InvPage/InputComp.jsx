import { IoIosArrowDropdown } from "react-icons/io";

function Form({ title }) {
  return (
    <div className="w-full border-2 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2 cursor-pointer">
        <p>{title}</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
      {title == "date" && <DateForm />}
      {title == "from" && <AddrForm />}
      {title == "to" && <AddrForm />}
      {title == "miscellaneous" && <MiscForm />}
      {title == "list" && <MiscForm />}
    </div>
  );
}

function DateForm() {
  return (
    <div className="flex items-center gap-10 w-full text-foreground p-2">
      <DateInpComp title={"Date"} />
      <DateInpComp title={"Due"} />
    </div>
  );
}

function AddrForm() {
  const labelArr = ["Name", "phone", "email", "address", "PinCode"];
  return (
    <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
      {labelArr.map((title, ind) => {
        return <TxtInputComp title={title} key={ind} />;
      })}
    </div>
  );
}

function MiscForm() {
  const labelArr = ["GST", "Discount", "Paid"];
  return (
    <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
      {labelArr.map((title, ind) => {
        return <TxtInputComp title={title} key={ind} />;
      })}
    </div>
  );
}

function TxtInputComp({ title }) {
  return (
    <div className="flex gap-2 w-full text-[1rem]">
      <h1 className="w-30">{title + ":"}</h1>

      {title != "address" && (
        <input
          className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
          type="text"
        />
      )}
      {title == "address" && (
        <textarea
          rows={3}
          className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border  border-accent"
        />
      )}
    </div>
  );
}

function DateInpComp({ title }) {
  return (
    <div className="flex gap-2 h-full w-full text-[1rem]">
      <h1>{title}</h1>
      <input
        className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
        type="date"
      />
    </div>
  );
}

export { Form, DateForm, AddrForm, MiscForm, TxtInputComp };
