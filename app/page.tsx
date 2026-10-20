const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "A considered online presence that introduces your business and makes the next step clear.",
  },
  {
    number: "02",
    title: "Custom applications",
    description:
      "Practical tools for bookings, orders, dashboards, and the way your business works.",
  },
  {
    number: "03",
    title: "Ongoing care",
    description:
      "Hosting setup, maintenance, and improvements as your needs evolve.",
  },
];

const projects = [
  {
    title: "HackSA",
    category: "Event registration website",
    description:
      "A registration platform with account creation and login, supporting more than 50 hackathon participants.",
    technologies: "React · TypeScript · Firebase Authentication",
    href: "https://hack-sa.vercel.app/",
  },
  {
    title: "Spectrum",
    category: "Geospatial dashboard",
    description:
      "Interactive maps and dashboards that turn geospatial data into information people can explore.",
    technologies: "Python · PostgreSQL · PostGIS · ArcGIS",
    href: "https://experience.arcgis.com/experience/d26b817eeb144ed68f8a7a95d2d8eb1a",
  },
  {
    title: "Frontier Hardware Challenge",
    category: "Environmental monitoring · 3rd place",
    description:
      "A sensor-based monitoring project that collects environmental data to identify abnormal conditions and support alerts.",
    technologies: "Arduino · Raspberry Pi · Google Cloud",
    href: "https://devpost.com/software/jorge-ai",
  },
];

const contactUrl = "https://www.linkedin.com/in/arianardrgz/";

const focusStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#e6d5b8]";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101416] text-[#f2eee5]">
      <a
        href="#main"
        className={`sr-only z-50 rounded bg-[#f2eee5] p-4 text-[#101416] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 ${focusStyles}`}
      >
        Skip to content
      </a>

      <header className="relative z-10 border-b border-white/10">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10"
        >
          <a
            href="#"
            aria-label="Nubexi home"
            className={`text-2xl font-medium tracking-tight ${focusStyles}`}
          >
            nubexi<span className="text-[#c8b28e]">.com</span>
          </a>

          <div className="flex items-center gap-5 text-sm sm:gap-9">
            <a
              href="#work"
              className={`text-[#b8bab5] transition-colors hover:text-white ${focusStyles}`}
            >
              Work
            </a>
            <a
              href="#services"
              className={`text-[#b8bab5] transition-colors hover:text-white ${focusStyles}`}
            >
              Services
            </a>
            <a
              href="#contact"
              className={`rounded-sm border border-white/30 px-4 py-2.5 transition-colors hover:border-[#f2eee5] hover:bg-[#f2eee5] hover:text-[#101416] ${focusStyles}`}
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          {/* Decorative glass composition */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
>
  <div className="absolute inset-0 bg-[#101416]" />

  {/* Cool light behind the glass */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at 85% 45%, rgba(26,103,145,0.22), transparent 60%)",
    }}
  />

  {/* Glass panels */}
  <div
    className="absolute -right-20 top-[12%] h-[70%] w-[65%] sm:right-[5%] sm:w-[43%]"
    style={{ perspective: "1000px" }}
  >
    <div
      className="absolute inset-0 border border-[#dce9e8]/30"
      style={{
        transform: "rotateY(-32deg) rotateX(8deg)",
        background:
          "linear-gradient(135deg, rgba(227,237,232,0.22), rgba(153,193,199,0.04) 48%, rgba(52,113,139,0.18))",
        boxShadow:
          "inset 1px 0 0 rgba(255,255,255,0.3), 20px 30px 70px rgba(0,0,0,0.3)",
      }}
    />

    <div
      className="absolute bottom-[-5%] left-[25%] top-[18%] w-[65%] border border-[#77c8e8]/35"
      style={{
        transform: "rotateY(38deg) rotateX(-6deg)",
        background:
          "linear-gradient(110deg, rgba(8,41,62,0.15), rgba(15,142,202,0.38) 65%, rgba(166,225,240,0.12))",
        boxShadow:
          "inset -2px 0 0 rgba(94,207,255,0.65), 0 25px 60px rgba(0,0,0,0.35)",
      }}
    />

    <div
      className="absolute left-[-8%] top-[30%] h-[55%] w-[70%] border border-white/20"
      style={{
        transform: "rotateY(-18deg) rotateZ(-8deg)",
        background:
          "linear-gradient(145deg, rgba(234,237,226,0.2), rgba(215,228,224,0.03) 60%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    />
  </div>

  {/* Dark overlay keeps the heading readable */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, #101416 5%, rgba(16,20,22,0.94) 30%, rgba(16,20,22,0.55) 60%, rgba(16,20,22,0.08) 100%)",
    }}
  />
</div>
          <div className="mx-auto flex min-h-[75svh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 sm:py-32">
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-[#c8b28e]">
              Independent web & software development
            </p>

            <h1
              id="hero-heading"
              className="max-w-5xl font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
            >
              Websites and software,
              <br />
              <span className="text-[#c8b28e]">
                built around your business.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#b8bab5]">
              Custom websites and applications, thoughtfully designed, built,
              and maintained.
            </p>

            <a
              href="#contact"
              className={`mt-10 inline-flex w-fit items-center gap-6 border-b border-[#c8b28e]/60 pb-3 text-sm transition-colors hover:text-[#c8b28e] ${focusStyles}`}
            >
              Start a project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-heading"
          className="scroll-mt-8 mx-auto max-w-7xl px-6 py-24 sm:px-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#c8b28e]">
            What Nubexi does
          </p>
          <h2
            id="services-heading"
            className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl"
          >
            A place to start.
            <br />
            Room to grow.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <article
                key={service.number}
                className="border-t border-white/20 pt-6"
              >
                <p className="text-xs tracking-widest text-[#c8b28e]">
                  {service.number}
                </p>
                <h3 className="mt-6 text-xl">{service.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-[#b8bab5]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-8 border-y border-white/10 bg-[#151b1e]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c8b28e]">
              Selected work
            </p>
            <h2
              id="work-heading"
              className="mt-5 font-serif text-4xl sm:text-5xl"
            >
              Ideas put into practice.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#b8bab5]">
            Projects by Nubexi founder Ariana Rosales exploring web development, data visualization, and connected hardware.
            </p>

            <div className="mt-14">
              {projects.map((project) => (
                <article
                  key={project.href}
                  className="grid gap-6 border-t border-white/15 py-10 md:grid-cols-2 md:gap-16"
                >
                  <div>
                    <p className="text-sm text-[#c8b28e]">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors hover:text-[#c8b28e] ${focusStyles}`}
                      >
                        {project.title}
                        <span aria-hidden="true" className="ml-3 text-xl">
                          ↗
                        </span>
                        <span className="sr-only">
                          {" "}
                          (opens in a new tab)
                        </span>
                      </a>
                    </h3>
                  </div>

                  <div>
                    <p className="leading-7 text-[#b8bab5]">
                      {project.description}
                    </p>
                    <p className="mt-5 text-sm leading-6 text-[#a4aaa9]">
                      {project.technologies}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-8 mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#c8b28e]">
            Your next project
          </p>
          <h2
            id="contact-heading"
            className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl"
          >
            What would you
            <br />
            like to build?
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-[#b8bab5]">
            Tell me about your business, your idea, or something you wish
            worked better. We can start there.
          </p>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-9 inline-flex items-center gap-8 rounded-sm bg-[#f2eee5] px-6 py-4 text-sm font-medium text-[#101416] transition-colors hover:bg-[#c8b28e] ${focusStyles}`}
          >
            Let&apos;s talk on LinkedIn
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-[#b8bab5] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-lg text-[#f2eee5]">nubexi.com</p>
          <p>© {new Date().getFullYear()} Nubexi</p>
        </div>
      </footer>
    </div>
  );
}