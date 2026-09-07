import { IoIosArrowDropdown } from "react-icons/io";
import clients from "@/database/ClientInfo"; 
import owner from "@/database/PersonalInfo";

export default function Form({ title, invoiceData, setInvoiceData }) {
  
  // Reverted to a simple updater - the parent's useEffect handles all math now
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full border-2 border-foreground rounded-sm">
      <div className="flex justify-between items-center bg-foreground font-light h-[4vh] w-full text-[1.2rem] px-2 cursor-pointer">
        <p>{title}</p>
        <IoIosArrowDropdown className="text-[1.7rem]" />
      </div>
      
      {title === "date" && <DateForm invoiceData={invoiceData} handleChange={handleChange} />}
      {title === "from" && <AddrForm prefix="from" invoiceData={invoiceData} handleChange={handleChange} setInvoiceData={setInvoiceData} />}
      {title === "to" && <AddrForm prefix="to" invoiceData={invoiceData} handleChange={handleChange} setInvoiceData={setInvoiceData} />}
      {title === "miscellaneous" && <MiscForm invoiceData={invoiceData} handleChange={handleChange} />}
    </div>
  );
}

function DateForm({ invoiceData, handleChange }) {
  return (
    <div className="flex items-center gap-10 w-full text-foreground p-2">
      <DateInpComp title="Date" name="dateCreated" value={invoiceData.dateCreated || ""} handleChange={handleChange} />
      <DateInpComp title="Due" name="dateDue" value={invoiceData.dateDue || ""} handleChange={handleChange} />
    </div>
  );
}

function AddrForm({ prefix, invoiceData, handleChange, setInvoiceData }) {
  const labelArr = [
    { label: "Name", name: `${prefix}Name` },
    { label: "Phone", name: `${prefix}Phone` },
    { label: "Email", name: `${prefix}Email` },
    { label: "Address", name: `${prefix}Address` },
    { label: "PinCode", name: `${prefix}PinCode` },
  ];

  const handleClientSelect = (e) => {
    const selectedId = e.target.value;
    const client = clients.find((c) => c.id === selectedId);
    
    if (client) {
      setInvoiceData((prev) => ({
        ...prev,
        customerId: client.id,
        toName: client.name,
        toPhone: client.phone,
        toEmail: client.email,
        toAddress: client.address,
        toPinCode: client.pincode,
      }));
    }
  };

  const handleOwnerFill = () => {
    setInvoiceData((prev) => ({
      ...prev,
      fromName: owner.name,
      fromPhone: owner.phone,
      fromEmail: owner.email,
      fromAddress: owner.address,
      fromPinCode: owner.pincode,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
      {prefix === "from" && (
        <div className="flex justify-end w-full mb-1">
          <button
            type="button"
            onClick={handleOwnerFill}
            className="text-[0.75rem] font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors px-2 py-1 cursor-pointer"
          >
            Use My Profile
          </button>
        </div>
      )}

      {prefix === "to" && (
        <div className="flex gap-2 w-full text-[1rem] mb-2">
          <h1 className="w-30">Select Client:</h1>
          <select 
            onChange={handleClientSelect}
            value={invoiceData.customerId || ""}
            className="w-full font-funnel-sans text-foreground text-[0.8rem] bg-transparent outline-none focus:ring-0 px-2 border border-accent cursor-pointer"
          >
            <option value="" disabled className="text-black bg-white">-- Choose Client --</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id} className="text-black bg-white">
                {c.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {labelArr.map((item, ind) => {
        return (
          <TxtInputComp 
            title={item.label} 
            name={item.name}
            value={invoiceData[item.name] || ""} 
            handleChange={handleChange}
            key={ind} 
          />
        );
      })}
    </div>
  );
}

function MiscForm({ invoiceData, handleChange }) {
  const labelArr = [
    { label: "GST", name: "GSTpercent" },
    { label: "Discount", name: "discountPercent" },
    { label: "Paid", name: "paidAmount" },
  ];

  return (
    <div className="flex flex-col items-center gap-1 h-full w-full text-foreground p-2">
      {labelArr.map((item, ind) => {
        return (
          <TxtInputComp 
            title={item.label} 
            name={item.name}
            value={invoiceData[item.name] || ""} 
            handleChange={handleChange}
            key={ind} 
          />
        );
      })}
    </div>
  );
}

function TxtInputComp({ title, name, value, handleChange }) {
  return (
    <div className="flex gap-2 w-full text-[1rem]">
      <h1 className="w-30">{title + ":"}</h1>

      {title.toLowerCase() !== "address" ? (
        <input
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
          type="number" // Set to number to prevent text input breaking calculations
        />
      ) : (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          rows={3}
          className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
        />
      )}
    </div>
  );
}

function DateInpComp({ title, name, value, handleChange }) {
  return (
    <div className="flex gap-2 h-full w-full text-[1rem]">
      <h1>{title}</h1>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full font-funnel-sans text-foreground text-[0.8rem] tracking-[-4%] appearance-none bg-transparent outline-none focus:ring-0 px-2 m-0 rounded-none border border-accent"
        type="date"
      />
    </div>
  );
}