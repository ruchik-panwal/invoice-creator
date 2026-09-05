import invoices from "@/database/Invoices";
import clients from "@/database/ClientInfo";
import owner from "@/database/PersonalInfo";

export default function PreviewWindow() {
  const invoice = invoices[0];
  const client = clients.find((client) => client.id === invoice.customerId);

  return (
    <div className="relative overflow-hidden bg-[#FFF9E0] text-foreground tracking-[-5%] border border-accent aspect-[1/1.414] p-6 h-190 flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col gap-3">
        <InvHeader invoice={invoice} />
        <CounterpartyInfo invoice={invoice} owner={owner} client={client} />
        <ItemizedTable invoice={invoice} />
        {/* <PaymentInfo /> */}
        <InvFooter email={owner.email} />
      </div>
    </div>
  );
}

function InvHeader({ invoice }) {
  return (
    <div className="flex justify-between ">
      <div className="font-koulen text-[5rem] leading-15">INVOICE</div>
      <div className="flex flex-col w-40 text-foreground/70 text-[0.6rem] normal-case">
        <div className="flex justify-between items-center -m-px">
          <p>Invoice Number:</p>
          <p className="text-[#C03D37] font-funnel tracking-[3%] ">
            {invoice.id}
          </p>
        </div>
        <div className="flex justify-between items-center -m-px">
          <p>Issue Date:</p>
          <p className="text-[#C03D37] font-funnel tracking-[3%]">
            {invoice.dateCreated}
          </p>
        </div>
        <div className="flex justify-between items-center -m-px">
          <p>Due Date:</p>
          <p className="text-[#C03D37] font-funnel  tracking-[3%]">
            {invoice.dateDue}
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

function ItemizedTable({ invoice }) {
  const items = invoice.items;
  console.log(items);

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
                <p className="flex-1">{item.description}</p>
                <p className="w-16 text-center">{item.hours}</p>
                <p className="w-16 text-center">{item.rate}</p>
                <p className="w-20 text-right">
                  {"₹ " + item.amount.toFixed(2)}
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
              <p>{"₹ " + invoice.subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>DISCOUNT</p>
              <p>{invoice.discountPercent + "%"}</p>
            </div>
            <div className="flex justify-between">
              <p>PAID</p>
              <p>{"₹ " + invoice.paidAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-accent px-1 flex justify-end">
          <div className="flex justify-between w-50">
            <p>GRAND TOTAL</p>
            <p>{"₹ " + invoice.totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// function PaymentInfo() {
//   return (
//     <div className="border border-accent text-[0.7rem] leading-none">
//       <div className="border-b border-accent px-1 mb-2">PAYMENT DETAILS</div>
//       <div className="px-1"></div>
//     </div>
//   );
// }

function InvFooter({ email }) {
  return (
    <div className="w-full flex justify-between text-[0.6rem] font-bold normal-case">
      <p>1/2</p>
      <p>{email}</p>
    </div>
  );
}
