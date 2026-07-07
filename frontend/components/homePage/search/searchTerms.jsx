import clients from "../../../database/ClientInfo";

export default function SearchTerms({ value, selected, termClick }) {
  return (
    <div className="w-full h-full flex flex-col gap-8 font-light items-center overflow-scroll">
      <button
        onClick={() => termClick("All")}
        className={`text-foreground border-y border-foreground w-full tracking-[-5%] ${"All" == selected ? "opacity-100" : "opacity-40"}`}
      >
        ALL INVOICES
      </button>
      <div className="flex flex-col gap-1 w-full h-full">
        {clients.map((client, ind) => {
          return (client.name.includes(value)) && (
            <ClientBtns
              key={ind}
              name={client.name}
              id={client.id}
              highlight={client.id == selected}
              termClick={() => termClick(client.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

function ClientBtns({ name, highlight, termClick }) {
  return (
    <button
      onClick={termClick}
      className={`text-foreground border-b border-foreground w-full tracking-[-5%] ${highlight ? "opacity-100" : "opacity-40"}`}
    >
      {name}
    </button>
  );
}
