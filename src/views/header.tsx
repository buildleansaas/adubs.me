import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "@/components/dark-mode-toggle";

const HEADER_LINKS = [
  {
    link: "#about",
    text: "About",
  },
  { link: "#services", text: "Services" },
  { link: "#portfolio", text: "Portfolio" },
  { link: "#testimonials", text: "Testimonials" },
  { link: "guides", text: "Guides" },
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

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-4 max-w-3xl mx-auto md:my-6">
      <div className="flex justify-start items-center gap-4 flex-wrap">
        {HEADER_LINKS.map(({ link, text }) => (
          <Link key={link} href={link} className="font-light hover:text-blue-500 hover:font-bold">
            {text}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-start items-center">
        {ICON_LINKS.map(({ name, icon, url }) => (
          <Link key={name} className="hover:text-blue-500" href={url}>
            {icon}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
