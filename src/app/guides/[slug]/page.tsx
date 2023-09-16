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
  <div className="my-16 md:my-24 xl:flex xl:items-center">
    <div className="text-center xl:text-left">
      <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold">{headline}</h2>
      <p className="text-xl md:text-3xl xl:text-5xl mt-2 xl:mt-8 font-light xl:leading-13">{subline}</p>
      <p className="text-2xl font-light leading-9 h-0 xl:h-auto xl:mt-8 xl:visible xl:opacity-100 invisible opacity-0">
        {sales_pitch}
      </p>
      <div className="my-8 space-x-2">
        <Button size="sm">
          <Link href={cta_link ?? ""} target="_blank">
            {cta_text}
          </Link>
        </Button>
        <Button size="sm" variant="secondary">
          <Link href="#benefits" target="_blank">
            What&apos;s In It For Me?
          </Link>
        </Button>
      </div>
    </div>
    <img src={visual ?? ""} alt={visual_alt ?? ""} className="rounded-xl mx-auto max-w-md xl:ml-12" />
  </div>
);

export default async function GuidePage({ params: { slug } }: { params: { slug: string } }) {
  const guide = getGuide(slug);

  const jumbotronProps = { ...guide?.jumbotron, cta_link: guide?.cta_link };

  return (
    <div className="max-w-7xl mx-auto">
      <Jumbotron {...jumbotronProps} />
    </div>
  );
}
