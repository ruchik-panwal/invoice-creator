import clients from "@/database/ClientInfo";
import owner from "@/database/PersonalInfo";

export default function PreviewWindow({ invoiceData }) {
  // 1. Try to find the client in the DB.
  // 2. If not found, build a new client object from the manually typed invoiceData.
  // 3. If those are empty too, use placeholder text so the preview looks good.
  const dbClient = clients.find((c) => c.id === invoiceData.customerId);
  
  const client = dbClient || {
    name: invoiceData.toName || "Client Name",
    phone: invoiceData.toPhone || "Phone Number",
    email: invoiceData.toEmail || "client@email.com",
    address: invoiceData.toAddress || "Client Address",
    pincode: invoiceData.toPinCode || "Pincode",
  };

  // We can do the same for the owner in case you manually edit the "From" fields!
  const sender = {
    name: invoiceData.fromName || owner.name || "Your Name",
    phone: invoiceData.fromPhone || owner.phone || "Your Phone",
    email: invoiceData.fromEmail || owner.email || "Your Email",
    address: invoiceData.fromAddress || owner.address || "Your Address",
    pincode: invoiceData.fromPinCode || owner.pincode || "Pincode",
  };

  return (
    <div className="relative overflow-hidden bg-[#FFF9E0] text-foreground tracking-[-5%] border border-accent aspect-[1/1.414] p-6 h-190 flex flex-col select-none">
      <div className="relative z-10 flex-1 flex flex-col gap-3">
        <InvHeader invoiceData={invoiceData} />
        <CounterpartyInfo owner={sender} client={client} />
        <ItemizedTable invoiceData={invoiceData} />
        {/* <PaymentInfo /> */}
        <InvFooter email={sender.email} />
      </div>
    </div>
  );
}

function InvHeader({ invoiceData }) {
  return (
    <div className="flex justify-between ">
      <div className="font-koulen text-[5rem] leading-15">INVOICE</div>
      <div className="flex flex-col w-40 text-foreground/70 text-[0.6rem] normal-case">
        <div className="flex justify-between items-center -m-px">
          <p>Invoice Number:</p>
          <p className="text-[#C03D37] font-funnel tracking-[3%] ">
            {invoiceData.id || "INV-XXXX"}
          </p>
        </div>
        <div className="flex justify-between items-center -m-px">
          <p>Issue Date:</p>
          <p className="text-[#C03D37] font-funnel tracking-[3%]">
            {invoiceData.dateCreated || "DD/MM/YYYY"}
          </p>
        </div>
        <div className="flex justify-between items-center -m-px">
          <p>Due Date:</p>
          <p className="text-[#C03D37] font-funnel  tracking-[3%]">
            {invoiceData.dateDue || "DD/MM/YYYY"}
          </p>
        </div>
      </div>
    </div>
  );
}

function CounterpartyInfo({ owner, client }) {
  return (
    <div className="border border-accent flex flex-col gap-2 text-[0.7rem]">
      <div className="flex justify-between items-center w-full border-b border-accent px-1">
        <h3>BILL FROM</h3>
        <h3>BILLED TO</h3>
      </div>
      <div className="normal-case px-1 mb-1 flex justify-between">
        <div className="text-[0.5rem] text-foreground/80 leading-none">
          <p>{owner.name}</p>
          <p>{owner.address}</p>
          <p>{owner.pincode}</p>
          <p>{owner.email}</p>
          <p>{owner.phone}</p>
        </div>
        <div className="text-[0.5rem] text-foreground/80 leading-none text-right">
          <p>{client.name}</p>
          <p>{client.address}</p>
          <p>{client.pincode}</p>
          <p>{client.email}</p>
          <p>{client.phone}</p>
        </div>
      </div>
    </div>
  );
}

function ItemizedTable({ invoiceData }) {
  const items = invoiceData.items || [];

  return (
    <div className="border border-accent h-full flex flex-col justify-between">
      <div className=" flex flex-col text-[0.7rem] leading-none">
        {/* Header Row */}
        <div className="flex px-1 pt-0.5 border-b border-accent mb-4 ">
          <p className="w-10">ITEM</p>
          <p className="flex-1">DESCRIPTION</p>
          <p className="w-16 text-center">HOURS</p>
          <p className="w-16 text-center">RATE</p>
          <p className="w-20 text-right">AMOUNT</p>
        </div>

        {/* List Rows */}
        <div>
          {items.map((item, ind) => {
            return (
              <div
                key={ind}
                className="flex px-1 py-0.5 border-b border-accent text-[0.65rem] text-foreground/70"
              >
                <p className="w-10">{String(ind + 1).padStart(2, "0")}</p>
                <p className="flex-1">{item.description || "Item Description"}</p>
                <p className="w-16 text-center">{item.hours || 0}</p>
                <p className="w-16 text-center">{item.rate || 0}</p>
                <p className="w-20 text-right">
                  {/* FIX: Wrapped in Number() */}
                  {"₹ " + Number(item.amount || 0).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col text-[0.65rem] pb-1">
        <div className="w-full  flex justify-end px-1">
          <div className="flex flex-col w-50">
            <div className="flex justify-between">
              <p>SUB TOTAL</p>
              {/* FIX: Wrapped in Number() */}
              <p>{"₹ " + Number(invoiceData.subTotal || 0).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>DISCOUNT</p>
              <p>{(invoiceData.discountPercent || 0) + "%"}</p>
            </div>
            <div className="flex justify-between">
              <p>PAID</p>
              {/* FIX: Wrapped in Number() */}
              <p>{"₹ " + Number(invoiceData.paidAmount || 0).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-accent px-1 flex justify-end">
          <div className="flex justify-between w-50">
            <p>GRAND TOTAL</p>
            {/* FIX: Wrapped in Number() */}
            <p>{"₹ " + Number(invoiceData.totalAmount || 0).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvFooter({ email }) {
  return (
    <div className="w-full flex justify-between text-[0.6rem] font-bold normal-case">
      <p>1/2</p>
      <p>{email}</p>
    </div>
  );
}