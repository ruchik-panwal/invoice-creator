import Image from "next/image";
import { IoIosSettings } from "react-icons/io";

export default function ProfileTab() {
  return (
    <div className="bg-accent flex flex-col w-full gap-2 p-2">
      <Image
        alt="Profile Image"
        src="/AkiChSaki.jpg"
        className=""
        width={500}
        height={400}
      />
      <button className="text-background flex items-center text-[1.125rem] gap-1">
        <IoIosSettings className="text-[1.4rem]" />
        Settings
      </button>
    </div>
  );
}
