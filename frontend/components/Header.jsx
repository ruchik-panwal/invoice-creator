import Link from "next/link"

export default function Header() {
    return (
        <div className="w-full flex justify-between overflow-hidden select-none">
            <Link href = "/"
            className="font-koulen text-foreground tracking-[-5%] leading-[0.8] text-[clamp(3rem,20vw,6rem)]">
                Pinvoice
            </Link>
        </div>
    )
}