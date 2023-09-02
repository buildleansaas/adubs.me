import Link from "next/link";

export default function About() {
  return (
    <div className="my-8" id="about">
      <h3 className="font-bold text-2xl mb-3">About</h3>
      <div className="space-y-6">
        <p className="leading-7">
          My journey with coding started with cutomizing my friends Myspace Profiles in the early 2000s. Since then, I
          have worked with Fortune 500 Companies, Small Businesses and Startups worldwide.
        </p>
        <p className="leading-7">
          I have learned a lot about what to do, and especially what not to do, when building any software application
          or service, be it a simple website or a complex web application.
        </p>
        <p className="leading-7">
          I am typically hired when a company has a bottleneck, error or complex feature implementation they cannot
          solve. Regardless of the technical problem, my skills in diagnosing the root cause or actual desired result
          and providing a simplified yet effective approach has been my calling card.
        </p>
        <p className="leading-7">
          If you find yourself a situation where you need help solving a problem, or developing a new solution, I would
          love to get in touch with you.
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
          for work experience and some{" "}
          <Link className="font-bold text-purple-500 hover:text-purple-900" href="#testimonials">
            testimonials
          </Link>{" "}
          from people I have worked with. If you like what you see and want to work with me, check out the{" "}
          <Link className="font-bold text-purple-500 hover:text-purple-900" href="#services">
            services
          </Link>{" "}
          below to see how we can work together.
        </p>
      </div>
    </div>
  );
}
