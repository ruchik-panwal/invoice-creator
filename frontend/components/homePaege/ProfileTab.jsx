import Image from "next/image";

export default function ProfileTab() {
  return (
    <div className="w-full h-full bg-accent">
      <Image
        alt="Profile Image"
        src="/AkiChSaki.jpg"
        width={500}
        height={500}
      />
    </div>
  );
}
