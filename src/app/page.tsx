import { Metadata } from "next";
import Header from "@/views/header";
import Profile from "@/views/profile";
import About from "@/views/about";
import Services from "@/views/services";
import Portfolio from "@/views/portfolio";
import Testimonials from "@/views/testimonials";

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
    <div className="max-w-7xl mx-auto p-4">
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  </>
);

export default Home;
