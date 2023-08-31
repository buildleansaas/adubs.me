import { Github, Linkedin, Twitter } from "lucide-react";

export const HEADER_LINKS = [
  {
    link: "#about",
    text: "About",
  },
  { link: "#services", text: "Services" },
  { link: "#portfolio", text: "Portfolio" },
  { link: "#testimonials", text: "Testimonials" },
];

export const ICON_LINKS = [
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
