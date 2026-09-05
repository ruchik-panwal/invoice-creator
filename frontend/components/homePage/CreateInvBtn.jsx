import Link from "next/link"

export default function CreateInvBtn() {
  return (
    <Link 
    href = "invoice"
    className="bottom-10 right-10 bg-accent text-white absolute h-[6vh] w-[10vw] rounded-[5px] ">
    <button className="rounded-[20px] text-[1.7rem] tracking-[-4%] w-full h-full">
      New Invoice
    </button>
    </Link>
  );
}
