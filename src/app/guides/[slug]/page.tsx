import { DOMAIN } from "@/app/sitemap";
import { Button } from "@/components/ui/button";
import { guides } from "@/data/guides";
import Link from "next/link";
import { Metadata } from "next";

const getGuide = (slug: string) => guides?.find((guide) => guide.slug === slug);

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const guide = getGuide(slug);

  if (guide) {
    const { name: title, description, keywords } = guide;
    return {
      metadataBase: new URL(`${DOMAIN}/guides/${slug}`),
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
      },
      twitter: {
        title,
        description,
      },
    };
  } else return {};
}

interface JumbotronProps {
  headline?: string;
  subline?: string;
  sales_pitch?: string;
  cta_text?: string;
  cta_link?: string;
  visual?: string;
  visual_alt?: string;
}

const Jumbotron = ({ headline, subline, sales_pitch, cta_text, cta_link, visual, visual_alt }: JumbotronProps) => (
  <>
    <div className="my-16 md:my-24 xl:my-48 xl:flex xl:items-center">
      <div className="text-center xl:text-left">
        <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold">{headline}</h2>
        <p className="text-xl md:text-3xl xl:text-5xl mt-2 xl:mt-8 font-light xl:leading-13">{subline}</p>
        <p className="text-2xl font-light leading-9 mt-8 hidden xl:inline-block">{sales_pitch}</p>
        <div className="my-8 space-x-2">
          <Button>
            <Link href={cta_link ?? ""} target="_blank">
              {cta_text}
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href="#benefits" target="_blank">
              What&apos;s In It For Me?
            </Link>
          </Button>
        </div>
      </div>
      <img src={visual ?? ""} alt={visual_alt ?? ""} className="rounded-xl mx-auto max-w-screen md:max-w-md xl:ml-12" />
    </div>
    <p className="text-xl md:text-2xl text-center font-light leading-9 xl:hidden">{sales_pitch}</p>
  </>
);


interface BenefitsProps {
  benefits: string[];
  headline?: string;
  subline?: string;
}

const Benefits = ({ benefits, headline, subline }: BenefitsProps) => (

    <div className="my-16 md:my-24 xl:my-48 xl:flex xl:items-center">
      <div className="text-center xl:text-left">
        <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold">{headline}</h2>
        <p className="text-xl md:text-3xl xl:text-5xl mt-2 xl:mt-8 font-light xl:leading-13">{subline}</p>
        
    </div>

);

export default async function GuidePage({ params: { slug } }: { params: { slug: string } }) {
  const guide = getGuide(slug);

  const jumbotronProps = { ...guide?.jumbotron, cta_link: guide?.cta_link };
  cosnt benefitsProps = {...guide?.benefits, headline: guide?.benefitsHeadline, subline: guide?.benefitsSubline}

  return (
    <div className="max-w-7xl mx-auto">
      <Jumbotron {...jumbotronProps} />
      <Benefits {...benefitsProps} />
    </div>
  );
}
