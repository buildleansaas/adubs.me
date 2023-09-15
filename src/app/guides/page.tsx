import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/data/guides";
import { Metadata } from "next";
import Link from "next/link";
import { DOMAIN } from "../sitemap";

const title = "Technical Guides: Master Next.js, SEO & More!";
const description =
  "Explore in-depth guides by Austin Witherow. Master Next.js, pSEO, ChatGPT, and more to supercharge your web development journey.";

export const metadata: Metadata = {
  metadataBase: new URL(`${DOMAIN}/guides`),
  title: title,
  description: description,
  keywords: ["Next.js Tutorials", "pSEO", "ChatGPT Guides", "Web Development", "TailwindCSS"],
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    title: title,
    description: description,
  },
  authors: {
    name: "Austin Witherow",
    url: DOMAIN,
  },
};

export default async function GuidesPage({}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="my-8">
        <h2 className="font-bold text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-1">
        {guides.map(({ name, description, slug }) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={`/guides/${slug}`} passHref>
                  Check it Out!
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
