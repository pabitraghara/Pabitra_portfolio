import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiDiscord,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/**
 * Tech stack entries shared across projects. `name` is used for the visible
 * chip label, the filter bar and accessible text; `color` tints the icon.
 */
const tech = {
  react: { name: "React", icon: FaReact, color: "text-sky-500" },
  node: { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
  html: { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  css: { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
  bootstrap: { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  nest: { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-800 dark:text-blue-400" },
  next: { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
  discord: { name: "Discord", icon: SiDiscord, color: "text-indigo-600" },
  javascript: { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  mysql: { name: "MySQL", icon: SiMysql, color: "text-sky-700 dark:text-sky-400" },
};

/**
 * Projects shown in the Projects section.
 *
 * - `featured: true` renders the project as a large showcase card.
 * - `image` is optional; an empty string renders a branded placeholder.
 * - `livelink` is optional; the "Live demo" button is hidden without it.
 * - `description` is a short one-line summary shown on the card.
 */
export const githubProfile = "https://github.com/pabitraghara";
export const githubRepositories =
  "https://github.com/pabitraghara?tab=repositories";

export const projects = [
  {
    name: "Razorpay",
    image: "/rozerpay.png",
    description: "TODO(SUP-1009): one-line project summary",
    featured: true,
    logos: [tech.react, tech.tailwind, tech.html, tech.css],
    githublink: "https://github.com/pabitraghara/Razorpay_Clone",
    githubrepolink: githubRepositories,
    livelink: "https://razorpay-clone-jade-pi.vercel.app/",
  },
  {
    name: "Discord UI Clone",
    image: "/discord.png",
    description: "TODO(SUP-1009): one-line project summary",
    featured: true,
    logos: [tech.html, tech.css, tech.tailwind, tech.react, tech.next, tech.discord],
    githublink: "https://github.com/pabitraghara/Discord",
    githubrepolink: githubRepositories,
    livelink: "https://discord-seven-wine-88.vercel.app/",
  },
  {
    name: "Online Food Delivery System",
    image: "/tomato.png",
    description: "TODO(SUP-1009): one-line project summary",
    logos: [tech.react, tech.node, tech.mongodb, tech.html, tech.css, tech.bootstrap],
    githublink: "https://github.com/pabitraghara/food-app",
    githubrepolink: githubRepositories,
  },
  {
    name: "Manali Tours Website",
    image: "/manali.png",
    description: "TODO(SUP-1009): one-line project summary",
    logos: [
      tech.nest,
      tech.react,
      tech.typescript,
      tech.tailwind,
      tech.html,
      tech.postgres,
      tech.next,
    ],
    githublink: "https://github.com/pabitraghara/Manali-Tour-Package-full-stack",
    githubrepolink: githubRepositories,
  },
  {
    name: "Railway Reservation System",
    image: "",
    description: "TODO(SUP-1009): one-line project summary",
    logos: [tech.html, tech.css, tech.javascript, tech.mysql],
    // TODO(SUP-1009): repository URL (currently points at the GitHub profile)
    githublink: githubProfile,
    githubrepolink: githubRepositories,
  },
  {
    name: "Bus Reservation System",
    image: "",
    description: "TODO(SUP-1009): one-line project summary",
    logos: [tech.react, tech.node, tech.mongodb, tech.html, tech.css, tech.bootstrap],
    // TODO(SUP-1009): repository URL (currently points at the GitHub profile)
    githublink: githubProfile,
    githubrepolink: githubRepositories,
  },
];
