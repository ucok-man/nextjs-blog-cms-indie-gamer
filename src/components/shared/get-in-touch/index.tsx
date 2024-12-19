import { Iterate } from "@/components/utility";
import { SOSMEDS } from "@/constant";
import Link from "next/link";
import Heading2 from "../heading-2";
import SectionWrapper from "../section-wrapper";

export default function GetInTouch() {
  return (
    <SectionWrapper className="z-10 bg-brand-green-400">
      <div className="flex flex-col items-center text-center">
        <Heading2 className="text-4xl lg:text-5xl uppercase">
          Get_in_Touch
        </Heading2>
        <p className="text-pretty mb-4 max-w-2xl max-lg:text-left">
          We love hearing from our community! Whether you have a question, want
          to collaborate, or just want to say hello, don&apos;t hesitate to
          reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <Iterate
            items={SOSMEDS}
            render={(item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group flex items-center rounded-none border-4 border-black bg-white px-4 py-2 font-mono text-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <item.icon className="mr-2 h-6 w-6" />
                {item.label}
              </Link>
            )}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
