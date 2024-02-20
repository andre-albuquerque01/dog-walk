import { Body } from "@/components/body";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap">
      <Body />
      <Image
        src="/dog.jpg"
        alt="Imagem do dog"
        width={409}
        height={403}
        className="max-sm:w-[309px] max-sm:h-[303px] max-sm:object-contain object-contain max-w-[409px] h-[403px]" />
    </div>
  );
}
