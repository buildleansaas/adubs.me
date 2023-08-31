import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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

export default function Profile() {
  return (
    <div className="flex flex-col text-center md:flex-row md:text-left items-center gap-4 mb-12">
      <Image className="rounded-full" alt="profile picture of Austin Witherow" src="/me.jpg" height={148} width={148} />
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
  );
}
