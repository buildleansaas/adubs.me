import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Austin Witherow | Software Developer for Hire",
  description:
    "Looking for a software developer to work on an app, website or idea? Austin Witherow has been in the industry for over 12 years and is ready to help you with your next project.",
};

const HEADER_LINKS = [
  {
    link: "#about",
    text: "About",
  },
  { link: "#services", text: "Services" },
  { link: "#portfolio", text: "Portfolio" },
];

const ICON_LINKS = [
  { name: "X", url: "https://x.com/aegiswishes1", icon: <Twitter size="18" /> },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/austinwitherow/",
    icon: <Linkedin size="18" />,
  },
  {
    name: "Github",
    url: "https://www.github.com/awitherow",
    icon: <Github size="18" />,
  },
];

const SKILLS = [
  "HTML",
  "CSS",
  "Javascript",
  "Reactjs",
  "Nextjs",
  "React Native",
  "Node",
  "Python",
  "SEO",
  "Programmatic SEO",
  "Analytics",
  "ChatGPT",
  "Scrum",
  "Agile",
];

const SERVICES = [
  {
    name: "Pair Programming",
    description: "70 Minutes of focused planning and coding together.",
    content: (
      <div className="space-y-4">
        <p>
          This package is perfect if you have a problem you are stuck on and need an expert set of eyes to help resolve
          it. Whether you&apos;re trying to set up your project, you&apos;re stuck on a bug, or want to do some in depth
          planning, this package is for you.
        </p>
        <p>
          Use coupon code <Badge>SAVE</Badge> for 50% off!
        </p>
      </div>
    ),
    price: 150,
    discounted: 75,
    link: "https://adubs.lemonsqueezy.com/checkout/buy/63df7bb0-1f15-4ae6-891e-25eaf189c950",
  },
  {
    name: "Software Consulting Monthly Retainer (10 Hours)",
    description: "Perfect for the small business or startup trying to launch their project professionally on a budget",
    content: (
      <div className="space-y-4">
        <p>
          Pay for 8 hours and get 10 hours of Software Consulting. Actively supporting Nextjs, React, HTML, CSS,
          Javascript, Typescript projects. Pay for 8 hours and get 10 hours of work on SaaS Feature. Actively supporting
          Nextjs, React, HTML, CSS, Javascript, Typescript projects. Also includes pair programming sessions, Agile and
          Scrum Project Management Facilitation.
        </p>
      </div>
    ),
    price: 1000,
    discounted: 800,
    link: "https://adubs.lemonsqueezy.com/checkout/buy/63df7bb0-1f15-4ae6-891e-25eaf189c950",
  },
];

const PORTFOLIO = [
  {
    name: "Scale Sleek",
    description: "Search Engine Optimization for the Rest of Us",
    type: "Personal",
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
    name: "Q.ai - Forbes",
    description: "Q.ai by Forbes&apos; AI Powered Investing Platform",
    type: "Client",
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
    name: "Ubuntu Med Spa",
    description: "Website and Blog for Med Spa Client",
    type: "Client",
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
    link: "https://tryq.ai",
  },
  {
    name: "Hawai'i School fo Yoga",
    description: "Website and Blog for Yoga Studio",
    type: "Client",
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
    link: "https://tryq.ai",
  },
];

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-start items-center gap-4 mt-8 mb-12">
            {HEADER_LINKS.map(({ link, text }) => (
              <Link key={link} href={link} className="font-light hover:text-purple-500 hover:font-bold">
                {text}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            {ICON_LINKS.map(({ name, icon, url }) => (
              <Link key={name} className="hover:text-purple-500" href={url}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center md:flex-row md:text-left items-center gap-4 mb-12">
          <Image
            className="rounded-full"
            alt="profile picture of Austin Witherow"
            src="/me.jpg"
            height={148}
            width={148}
          />
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Austin Witherow</h1>
              <h2 className="text-lg font-light">Software Developer for Hire</h2>
              <div className="my-2">
                {SKILLS.map((skill, i) => (
                  <Badge className={twMerge("m-1", i === 0 && "my-1 mr-0 ml-1")} key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="py-1 px-4 mt-2 hover:bg-purple-500" asChild>
                <Link href="#services">Work with Me</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="my-8" id="about">
          <h3 className="font-bold text-lg mb-3">About</h3>
          <div className="space-y-6">
            <p className="leading-7">
              My journey with coding started with cutomizing my friends Myspace Profiles in the early 2000s. Since then,
              I have worked with Fortune 500 Companies, Small Businesses and Startups worldwide.
            </p>
            <p className="leading-7">
              I have learned a lot about what to do, and especially what not to do, when building any software
              application or service.
            </p>
            <p className="leading-7">
              I am typically hired when a company has a bottleneck, error or complex feature implementation they cannot
              solve. Regardless of the technical problem, my skills in diagnosing the root cause or actual desired
              result and providing a simplified yet effective approach has been my calling card.
            </p>
            <p className="leading-7">
              If you find yourself a situation where you need help solving a problem, or developing a new solution, I
              would love to get in touch with you.
            </p>
            <p className="leading-7">
              You can check out my{" "}
              <Link className="font-bold text-purple-500 hover:text-purple-900" href="#portfolio">
                portfolio
              </Link>{" "}
              below for samples of my work, and my most recent{" "}
              <Link
                className="font-bold text-purple-500 hover:text-purple-900"
                href="https://docs.google.com/document/d/1-hVL9NgwoR_s-SmsexrG8pp5N7HVEbJYWChiSM41svQ/edit?usp=sharing"
                target="_blank"
              >
                resume
              </Link>{" "}
              for work experience. If you like what you see and want to work with me, check out the{" "}
              <Link className="font-bold text-purple-500 hover:text-purple-900" href="#services">
                services
              </Link>{" "}
              below to see how we can work together.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div>
          <div className="my-8" id="services">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 ">
              {SERVICES.map(({ name, description, content, price, discounted, link }) => (
                <Card key={name}>
                  <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                  <CardContent>{content}</CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={link} className="hover:bg-purple-500">
                        {discounted ? (
                          <>
                            <span className="line-through mr-1">${price}</span>
                            <span>${discounted}</span>
                          </>
                        ) : (
                          `$${price}`
                        )}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="my-8" id="portfolio">
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
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
                    <img alt={name} src={image} className="mb-4 rounded-lg" />
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
        </div>
      </div>
    </>
  );
}
