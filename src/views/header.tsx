import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const HEADER_LINKS = [
  {
    link: "#about",
    text: "About",
  },
  { link: "#services", text: "Services" },
  { link: "#portfolio", text: "Portfolio" },
  { link: "#testimonials", text: "Testimonials" },
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
  );
}
