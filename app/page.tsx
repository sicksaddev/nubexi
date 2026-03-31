export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <a
          href="https://www.linkedin.com/in/arianardrgz/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <h1 className="mx-auto text-5xl font-medium tracking-tight sm:text-6xl">
            <span className="transition duration-200 group-hover:text-black">
              Ariana
            </span>
          </h1>
        </a>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
          My work focuses on secure development, clear design, and practical
          solutions that are easy to use and understand.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>

        <div className="mt-6 grid gap-5">
          <article className="rounded-3xl border border-gray-200 p-7 transition duration-200 hover:border-gray-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-medium tracking-tight">
                  HackSA, Citywide Hackathon Website
                </h3>
                <p className="mt-2 text-sm text-gray-500">Fall 2023</p>
              </div>

              <a
                href="https://hack-sa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                View Project
              </a>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-gray-500">
              Developed a registration platform using React and TypeScript with
              Firebase Authentication for secure user signup and login. Managed
              authentication workflows through Firebase and deployed the site on
              Vercel to support reliable access for 50 plus participants.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              React, TypeScript, Firebase Authentication, Vercel
            </p>
          </article>

          <article className="rounded-3xl border border-gray-200 p-7 transition duration-200 hover:border-gray-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-medium tracking-tight">
                  Spectrum, GIS and Data Visualization Dashboard
                </h3>
                <p className="mt-2 text-sm text-gray-500">Spring 2024</p>
              </div>

              <a
                href="https://experience.arcgis.com/experience/d26b817eeb144ed68f8a7a95d2d8eb1a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                View Project
              </a>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-gray-500">
              Processed geospatial data using Python and PostgreSQL with PostGIS
              for spatial analysis. Analyzed and visualized results in ArcGIS Pro,
              then published interactive dashboards in ArcGIS Online for user
              exploration and interpretation.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              Python, PostgreSQL, PostGIS, ArcGIS Pro, ArcGIS Online
            </p>
          </article>

          <article className="rounded-3xl border border-gray-200 p-7 transition duration-200 hover:border-gray-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-medium tracking-tight">
                  Hack UTD, Frontier Communications Hardware Challenge
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  3rd Place · Fall 2023
                </p>
              </div>

              <a
                href="https://devpost.com/software/jorge-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition duration-200 hover:border-black hover:bg-black hover:text-white"
              >
                View Project
              </a>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-gray-500">
              Developed an environmental monitoring system using Arduino and
              Raspberry Pi with temperature and humidity sensors, a cooling fan,
              and a deterrent light. Collected data in Google Cloud to detect
              abnormal conditions and support alerts.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              Arduino, Raspberry Pi, Sensors, Google Cloud
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <a
          href="https://www.linkedin.com/in/arianardrgz/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          <p className="text-base uppercase tracking-[0.2em] text-gray-400 transition duration-200 group-hover:text-black">
            Contact
          </p>
        </a>
      </section>
    </main>
  );
}