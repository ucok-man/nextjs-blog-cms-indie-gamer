import BackgroundDiagonal from "@/components/shared/background-diagonal";
import GetInTouch from "@/components/shared/get-in-touch";
import Heading1 from "@/components/shared/heading-1";
import Heading2 from "@/components/shared/heading-2";
import ImageBorder from "@/components/shared/image-border";
import SectionWrapper from "@/components/shared/section-wrapper";
import TeamCard from "@/components/shared/team-card";
import { VisiMisi } from "@/components/shared/visi-misi";
import { Iterate } from "@/components/utility";
import { ABOUT_HERO, AUTHOR, OUR_STORY } from "@/constant";

export default function AboutPage() {
  return (
    <div>
      <BackgroundDiagonal />

      <SectionWrapper className="z-10">
        <Heading1>ABOUT_US</Heading1>

        <div className="mb-8 grid gap-8 lg:grid-cols-2 grid-cols-1">
          <div className="space-y-4 text-xl">
            <Iterate
              items={ABOUT_HERO}
              render={(item, idx) => <p key={idx}>{item}</p>}
            />
          </div>
          <ImageBorder src="/junggle.png" alt="Logo" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="z-10">
        <Heading2>Our_Story</Heading2>
        <div className="space-y-4 text-lg mb-8">
          <Iterate
            items={OUR_STORY}
            render={(item, idx) => <p key={idx}>{item}</p>}
          />
        </div>
        <TeamCard author={AUTHOR} />
      </SectionWrapper>

      <SectionWrapper className="z-10">
        <Heading2>Our_Mission_&_Vision</Heading2>
        <div className="space-y-4 text-lg">
          <VisiMisi.mission />
          <VisiMisi.vision />
          <VisiMisi.commitment />
        </div>
      </SectionWrapper>

      <GetInTouch />

      {/* DECORATION */}
      <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border-8 border-black bg-[#B4FF39]"></div>
      <div className="absolute -right-4 -top-4 h-24 w-24 border-8 border-black bg-[#FFE5E5]"></div>
    </div>
  );
}
