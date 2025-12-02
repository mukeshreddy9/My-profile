import React from "react";
import { motion } from "framer-motion";

const profileImage = "/mnt/data/a916c9ff-8329-45b7-bc9f-93c1865c9416.png";

export default function NeverBeforeEverAfterUI() {
  return (
    // Prevent any accidental horizontal scroll
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0f172a] via-[#021028] to-[#051428] text-slate-100 antialiased">
      {/* Decorative background hidden on small screens (avoids overflow) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <svg className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 opacity-20" width="1400" height="800" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#7c3aed" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="150" r="280" fill="url(#g1)" />
          <circle cx="1100" cy="650" r="320" fill="#0ea5a4" opacity="0.06" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-12 box-border">
        {/* NAV - simplified: avatar + name only (no links, no menu) */}
        <nav className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-bold">MR</div>
            <div className="leading-tight min-w-0">
              <div className="text-sm font-medium tracking-wide truncate">Mukesh Reddy Theddu</div>
              <div className="text-xs text-slate-300 truncate">Full Stack Developer & ERP Specialist</div>
            </div>
          </div>

          {/* Intentionally empty on the right: no links, no resume button, no menu */}
          <div />
        </nav>

        {/* Header */}
        <header className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <motion.aside initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-white/5 to-white/3 p-5 rounded-2xl shadow-xl md:order-2">
            <div className="flex sm:block items-center gap-4">
              <img src={profileImage} alt="Mukesh" className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover ring-2 ring-white/20 mb-3 sm:mb-4 max-w-full" />
              <div className="ml-3 sm:ml-0 text-center sm:text-left">
                <div className="font-semibold text-base sm:text-lg">THEDDU MUKESH REDDY</div>
                <div className="text-xs text-slate-300 sm:text-sm">Full Stack Developer — Python, Django, MEAN</div>

                <div className="mt-3 text-slate-300 text-xs sm:text-sm space-y-1 break-words">
                  <div><strong>Location:</strong> Bengaluru</div>
                  <div><strong>Email:</strong> <a className="underline" href="mailto:tmukeshreddy21@gmail.com">tmukeshreddy21@gmail.com</a></div>
                  <div><strong>LinkedIn:</strong> <a className="underline" href="https://www.linkedin.com/in/mukesh-reddy-theddu-b46082328" target="_blank" rel="noreferrer">/in/mukesh-reddy-theddu-b46082328</a></div>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="md:col-span-2 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">Full Stack Web Developer</h1>
            <p className="text-slate-300 max-w-full sm:max-w-xl mb-4 text-sm sm:text-base">I build full-stack web applications and ERP systems that replace friction with flow. From concept to production — performant, maintainable, and delightful.</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto border border-white/10 hover:bg-white/5 rounded-lg text-sm">Contact Me</a>
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto border border-white/10 hover:bg-white/5 rounded-lg text-sm">See Projects</a>
              <a href="#experience" className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto border border-white/10 hover:bg-white/5 rounded-lg text-sm">Experience</a>
            </div>

            <div className="mt-6">
              {/* Stats as grid so they never overflow horizontally */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                <Stat label="Years" value="1+" />
                <Stat label="ERP Systems" value="4" />
                <Stat label="Apps" value="2" />
              </div>
            </div>
          </motion.div>
        </header>

        {/* Projects */}
        <section id="projects" className="mt-8">
          <SectionHeading title="Selected Projects" subtitle="Real systems shipped to production" />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampleProjects.map((p) => (<ProjectCard key={p.id} project={p} />))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-10">
          <SectionHeading title="Experience" subtitle="Where I make an impact" />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <ExperienceCard />
            <div className="bg-white/5 p-4 rounded-2xl">
              <h4 className="font-semibold">More Roles & Highlights</h4>
              <ul className="mt-3 text-slate-300 text-sm list-disc list-inside space-y-2">
                <li>ERP rollout for college portal — Academic, Admin, Parent & Student portals</li>
                <li>Standalone Inventory Management System — tracking & reporting</li>
                <li>Optimised backend pipelines and deployment workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10">
          <SectionHeading title="Let’s build something" subtitle="Get in touch — I respond fast" />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2 bg-white/5 p-4 rounded-2xl"><ContactForm /></div>
            <div className="bg-white/5 p-4 rounded-2xl">
              <h4 className="font-semibold">Quick Info</h4>
              <div className="mt-3 text-slate-300 text-sm break-words">
                <div><strong>Email:</strong> <a href="mailto:tmukeshreddy21@gmail.com" className="underline">tmukeshreddy21@gmail.com</a></div>
                <div className="mt-2"><strong>LinkedIn:</strong> <a className="underline" href="https://www.linkedin.com/in/mukesh-reddy-theddu-b46082328" target="_blank" rel="noreferrer">Profile</a></div>
                <div className="mt-2"><strong>Location:</strong> Bengaluru</div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href="assets/Profile.pdf" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 text-black text-sm font-semibold text-center w-full sm:w-auto">Download CV</a>
                <a href="mailto:tmukeshreddy21@gmail.com" className="px-4 py-2 rounded-md border border-white/10 text-sm text-center w-full sm:w-auto">Email</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

/* ----------------- Subcomponents ----------------- */

function Stat({ label, value }) {
  return (
    <div className="bg-white/3 p-3 rounded-lg text-center">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        {subtitle && <div className="text-slate-300 text-sm mt-1">{subtitle}</div>}
      </div>
      <div className="text-xs text-slate-400 hidden sm:block">Creative systems · Production ready</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="bg-white/5 p-4 rounded-2xl shadow-md">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold">P</div>
        <div>
          <div className="font-semibold text-sm">{project.title}</div>
          <div className="text-slate-300 text-xs mt-1">{project.short}</div>
        </div>
      </div>

      <div className="mt-3 text-slate-300 text-sm">{project.description}</div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400">{project.tech.join(" · ")}</div>
        <div className="flex gap-2">
          {project.live && (<a className="text-xs px-3 py-1 bg-white/6 rounded-md" href={project.live} target="_blank" rel="noreferrer">Live</a>)}
          {project.repo && (<a className="text-xs px-3 py-1 bg-white/6 rounded-md" href={project.repo} target="_blank" rel="noreferrer">Repo</a>)}
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceCard() {
  return (
    <div className="bg-white/5 p-4 rounded-2xl">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="font-semibold">CKP Software Technologies</div>
          <div className="text-slate-300 text-sm">Full Stack Developer — January 2025 - Present</div>

          <div className="mt-2 text-slate-300 text-sm">
            Successfully rolled out a full-fledged ERP system on a college portal with Academic & Administrative modules, Parent & Student portals, and additional utilities. Also built an Inventory Management System and other production apps.
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
      <div>
        <label className="block text-sm text-slate-300 mb-1">Name</label>
        <input className="w-full p-3 rounded-lg bg-white/3 text-white placeholder-slate-400" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm text-slate-300 mb-1">Email</label>
        <input className="w-full p-3 rounded-lg bg-white/3 text-white placeholder-slate-400" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-sm text-slate-300 mb-1">Message</label>
        <textarea className="w-full p-3 rounded-lg bg-white/3 text-white placeholder-slate-400" rows={5} placeholder="Tell me about your project" />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold w-full">Send</button>
        <button type="button" className="px-4 py-2 rounded-lg border border-white/10 text-sm w-full">Schedule a call</button>
      </div>
    </form>
  );
}

/* ---------------- sample data ---------------- */

const sampleProjects = [
  {
    id: "erp-portal",
    title: "College ERP Portal",
    short: "End-to-end academic administration",
    description: "Academic & administrative modules, parent/student portals and reporting tools deployed to production.",
    tech: ["Django", "Postgres", "Tailwind"],
    live: "#",
    repo: "#",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    short: "Standalone inventory & tracking system",
    description: "Inventory tracking, user roles, alerts and reporting with import/export capabilities.",
    tech: ["Python", "Django", "REST"],
    live: "#",
    repo: "#",
  },
  {
    id: "portal-mini",
    title: "Student Portal",
    short: "Portal for students & parents",
    description: "Authentication, dashboarding, notices and academic tracking.",
    tech: ["React", "Django", "JWT"],
    live: "#",
    repo: "#",
  },
];
