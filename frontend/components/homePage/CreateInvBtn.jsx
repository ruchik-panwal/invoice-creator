import Link from "next/link"

export default function CreateInvBtn() {
  return (
    <Link 
    href = "invoice"
    className="bottom-10 right-10 bg-foreground text-white absolute h-[10vh] w-[13vw] rounded-[20px] ">
    <button className="rounded-[20px] text-[1.7rem] tracking-[-4%] w-full h-full">
      New Invoice
    </button>
    </Link>
  );
}
