import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const SERVICES = [
  {
    name: "👨‍💻 Pair Programming",
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
    name: "🔁 Software Consulting Monthly Retainer (10 Hours)",
    description: "Perfect for the small business or startup trying to launch their project professionally on a budget",
    content: (
      <div className="space-y-4">
        <p>
          Pay for 8 hours and get 10 hours of Software Consulting. Actively supporting Nextjs, React, HTML, CSS,
          Javascript, Typescript projects. Also includes pair programming sessions, Agile and Scrum Project Management
          Facilitation.
        </p>
      </div>
    ),
    price: 1000,
    discounted: 800,
    link: "https://adubs.lemonsqueezy.com/checkout/buy/63df7bb0-1f15-4ae6-891e-25eaf189c950",
  },
];

export default function Services() {
  return (
    <div id="services">
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
                <Link href={link} className="hover:bg-blue-500">
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
  );
}
