import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const TESTMONIALS = [
  {
    name: "Pablo Rothbart",
    img: "pablo.png",
    context: "Co Founder at Scale Sleek",
    text: "I have been working with Austin for a few months now. There is no error or feature that we haven't been able to complete. Not only is he a coding demon. He is also a great guy to speak to on a personal level. Our partnership has been super smooth and fruitful. I look forward to the future working together.",
  },
  {
    name: "Jenny Coleman",
    img: "jenny.jpg",
    context: "Ubuntu Med Spa Client",
    text: "Austin not only helped me rapidly set up my marketing website for Ubuntu Med Spa, but he introduced me to a simple client management system using Notion and helped me work my sales outreach and marketing flow. Ask him anything! There's a chance he'll know exactly what to do to help you!",
  },
  {
    name: "Zach Tobin",
    img: "zach.jpeg",
    context: "SaaS Consulting Client",
    text: "Austin has the rare combination of technical expertise, product-mindedness, and bias toward action. On top of that, he's an all around great guy to work with each day. We've worked together on several projects and I hope to partner on many more!",
  },
];

export default function Testimonials() {
  return (
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
  );
}
