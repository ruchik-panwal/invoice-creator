const DummyNames = [
  "Vighnesh Mithari",
  "Sanchit Gade",
  "Kamalnath Shukla",
  "Sumeet Devrukhker",
];

export default function SearchTerms() {
  return (
    <div className="w-full h-full flex flex-col gap-8 font-light items-center overflow-scroll">
      <button className="text-foreground border-y border-foreground w-full tracking-[-5%]">
        ALL INVOICES
      </button>
      <div className="flex flex-col gap-1 w-full h-full">
        {DummyNames.map((item, ind) => {
          return <ClientBtns key={ind} name={item} />;
        })}
      </div>
    </div>
  );
}

function ClientBtns({ name }) {
  return (
    <button className="text-foreground border-b border-foreground w-full tracking-[-5%]">
      {name}
    </button>
  );
}
