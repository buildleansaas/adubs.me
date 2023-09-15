import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/data/guides";
import Link from "next/link";

export default async function GuidesPage({}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="my-8">
        <h2 className="font-bold text-3xl">Guides</h2>
        <p>Below are a collection of techincal guides to help you level up your software skills!</p>
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
