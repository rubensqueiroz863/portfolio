import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const translation = useTranslations("Footer");
  return (
    <div className="flex items-center gap-2 flex-col text-[16px] md:text-[18px] md:px-0 px-16 justify-center pt-16 pb-12">
      <p className="flex gap-2 items-center text-(--text-main)/80 dark:text-(--text-main)/80">
        Built with:
        <Image
          src={"https://i.postimg.cc/Zqc6YScN/nextjs-original.png"}
          width={128}
          height={128}
          alt="Nextjs logo"
          className="w-5 h-5 md:w-6 md:h-6"
        />
        Next.js
        <Image
          src={"https://i.postimg.cc/Yqd9SSKg/favicon-4.png"}
          width={128}
          height={128}
          alt="Nextjs logo"
          className="w-5 h-5 md:w-6 md:h-6"
        />
        Vercel
      </p>
      <p className="text-sm text-center text-(--text-secondary)">
        {translation("copyright")}
      </p>
    </div>
  );
}