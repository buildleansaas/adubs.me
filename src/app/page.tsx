import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { PORTFOLIO } from "@/data/portfolio";
import { HEADER_LINKS, ICON_LINKS } from "@/data/header";
import { SKILLS } from "@/data/skills";
import { SERVICES } from "@/data/services";
import { TESTMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Austin Witherow | Software Developer for Hire",
  description:
    "Looking for a software developer to work on an app, website or idea? Austin Witherow has been in the industry for over 12 years and is ready to help you with your next project.",
};

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
          <h3 className="font-bold text-2xl mb-3">About</h3>
          <div className="space-y-6">
            <p className="leading-7">
              My journey with coding started with cutomizing my friends Myspace Profiles in the early 2000s. Since then,
              I have worked with Fortune 500 Companies, Small Businesses and Startups worldwide.
            </p>
            <p className="leading-7">
              I have learned a lot about what to do, and especially what not to do, when building any software
              application or service, be it a simple website or a complex web application.
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
            <h3 className="font-bold text-2xl mb-4">Services</h3>
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
          <div className="my-8" id="testimonials">
            <h3 className="font-bold text-2xl mb-4">Testimonials</h3>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 ">
              {TESTMONIALS.map(({ name, context, text, img }) => (
                <Card key={name}>
                  <CardHeader>
                    <CardTitle className="leading-7">&quot;{text}&quot;</CardTitle>
                    <CardDescription className="flex items-center">
                      <Image
                        height={50}
                        width={50}
                        src={`/testimonials/${img}`}
                        alt={`Image of ${name} - ${context}`}
                        className="rounded-full mr-2"
                      />{" "}
                      {name} - {context}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
