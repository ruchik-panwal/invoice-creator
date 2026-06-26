import { Form } from "./InputComp" 

export default function InfoForms() {
  const titles = ["date", "from", "to", "miscellaneous"];

  return (
    <div className="flex flex-col gap-4 h-full w-full p-4 overflow-y-scroll">
      {titles.map((title, ind) => {
        return <Form title={title} key={ind} />;
      })}
    </div>
  );
}
