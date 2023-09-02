import { Metadata } from "next";
import Header from "@/views/header";
import Profile from "@/views/profile";
import About from "@/views/about";
import Services from "@/views/services";
import Portfolio from "@/views/portfolio";
import Testimonials from "@/views/testimonials";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Austin Witherow | Software Developer for Hire",
  description:
    "Looking for a software developer to work on an app, website or idea? Austin Witherow has been in the industry for over 12 years and is ready to help you with your next project.",
};

const Home = () => (
  <>
    <div className="max-w-3xl mx-auto">
      <Header />
      <Profile />
      <About />
    </div>
    <div className="max-w-7xl mx-auto p-4 space-y-12">
      <Services />
      <Testimonials />
      <Portfolio />
    </div>
    <div className="text-center max-w-3xl mx-auto my-16">
      <h2 className="text-2xl font-bold">Is it Meant to Be?</h2>
      <p className="my-4">
        If you&apos;re liking what I&apos;m putting down and think that I could help you, don&apos;t hesitate. Reach out
        today and let&apos;s get started working together.
      </p>
      <Button asChild>
        <Link href="#services">Get Started</Link>
      </Button>
    </div>
  </>
);

export default Home;
