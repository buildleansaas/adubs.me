import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const PORTFOLIO = [
  {
    name: "📈 Scale Sleek",
    description: "Search Engine Optimization for the Rest of Us",
    type: "Full Featured SaaS",
    image: "/scalesleek.jpg",
    content: (
      <div className="space-y-4">
        <p>
          If you know anything about Search Engine Optimization Software, you know that the learning curve to even use
          them is similar to getting an associates degree. With Scale Sleek, you can drive organic traffic that converts
          to any website by inputting your URL, and we&apos;ll give you expert SEO insights and recommendations to help
          boost your Search Engine Results Page rankings without the headache.
        </p>
      </div>
    ),
    link: "https://scalesleek.app",
  },
  {
    name: "💸 Q.ai - Forbes",
    description: "Q.ai by Forbes&apos; AI Powered Investing Platform",
    type: "React Native Client",
    image: "/qai.png",
    content: (
      <div className="space-y-4">
        <p>
          Q.ai is an AI-powered wealth management app offering curated Investment Kits for optimized fund growth. As the
          lead engineer for the Funds In Funds Out Squad, I oversaw React Native app and Ruby on Rails backend
          development, handling seamless bank interactions and fund management. I also played a key role in app
          performance analysis, ensuring a smooth user experience.
        </p>
      </div>
    ),
    link: "https://tryq.ai",
  },
  {
    name: "💅 Ubuntu Med Spa",
    description: "Website and Blog for Med Spa Client",
    type: "Local SEO Client",
    image: "/ubuntumedspa.png",
    content: (
      <div className="space-y-4">
        <p>
          Ubuntu Med Spa is a Med Spa in New Kent, Virginia. I was hired to build a simple marketing site for them.
          Instead of going with a complex and costly implementation, we kept overall costs down to $20 a MONTH and are
          driving organic traffic successfully via search engine optimization.
        </p>
      </div>
    ),
    link: "https://ubuntumedspa.com",
  },
  {
    name: "🧘‍♀️ Hawai'i School of Yoga",
    description: "Website and Blog for Yoga Studio",
    type: "Local SEO Client",
    image: "/hsy.jpg",
    content: (
      <div className="space-y-4">
        <p>
          Hawai&apos;i school of Yoga is a Yoga Studio based in Oahu, Hawai&apos;i, where I trained to become a Yoga
          Instructor and recieved my 500 hour yoga teacher training certificate. Instead of going with a complex and
          costly implementation, we kept overall costs down to $20 a YEAR and are driving organic traffic successfully
          via search engine optimization.
        </p>
      </div>
    ),
    link: "https://hawaiischoolofyoga.com",
  },
  {
    name: "🕸️ Quick Urchin",
    description: "Micro SaaS for Generating UTM Parameters",
    type: "Micro SaaS",
    image: "/quickurchin.png",
    content: (
      <div className="space-y-4">
        <p>
          Quick Urchin is a Micro SaaS that I built to help marketers generate UTM parameters for their marketing
          campaigns. It simplifies the steps of crafting urls with multiple query params into a simple form and
          generates the url for you. It also saves your history so you can easily copy and paste your previous urls.
        </p>
      </div>
    ),
    link: "https://hawaiischoolofyoga.com",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h3 className="font-bold text-2xl mb-4">Portfolio</h3>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 ">
        {PORTFOLIO.map(({ name, description, content, link, image, type }) => (
          <Card key={name}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                {name} <Badge className="ml-auto bg-purple-500">{type}</Badge>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={name} src={`/portfolio/${image}`} className="mb-4 rounded-lg" />
              <>{content}</>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={link} className="hover:bg-purple-500">
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
