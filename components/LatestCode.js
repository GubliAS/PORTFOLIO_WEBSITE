import React from "react";
import userData from "@constants/data";

export default function LatestCode() {
  // Manually define the repositories you want to display
  const repos = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and TailwindCSS.",
      clone_url: "https://github.com/your-username/portfolio-website",
    },
    {
      name: "SwiftMart App",
      description: "A mobile e-commerce application built with React Native and Springboot. This was done collaboratively with a team of 7 developers in which i played the role of Project Manager, Frontend Developer, UI/UX Designer and led in integration of the entire app with backend services.",
      clone_url: "https://github.com/SwiftMart-org/SwiftMart_App.git",
    },
    {
      name: "SwiftMart App",
      description: "This holds the link to the UI/UX design.",
      clone_url: "https://www.figma.com/files/team/1503370432828221513/project/382496759/SwiftMart?fuid=1503370428725895959",
    },
    {
      name: "CSS Website",
      description: "A website designed using pure HTML and CSS. I built this along with two friends. This website was our entry into a challenge held by the Computer Science Society, KNUST for the best website design. We emerged first runner-up.",
      clone_url: "https://github.com/BinaryBond/CSS_WEBSITE.git",
    },
  ];

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md transition duration-1000 ease-out hover:scale-125 bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Render the manually defined repositories */}
        {repos.map((latestRepo, idx) => (
          <GithubRepoCard latestRepo={latestRepo} key={idx} />
        ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        target="_blank"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
