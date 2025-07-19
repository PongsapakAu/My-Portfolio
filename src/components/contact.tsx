import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import { contactInfo } from "../libs/contact";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  Email: <FiMail className="h-6 w-6 text-amber-400" />,
  PhoneNumber: <FiPhone className="h-6 w-6 text-amber-400" />,
  Github: <FiGithub className="h-6 w-6 text-amber-400" />,
  Linkedin: <FiLinkedin className="h-6 w-6 text-amber-400" />,
  Line: <FiMessageCircle className="h-6 w-6 text-amber-400" />,
};

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-cradbg/30 rounded-2xl border border-amber-50/20 px-6 py-12 text-white shadow-2xl ring-1 ring-white/5 backdrop-blur-md transition-all duration-500 sm:px-10 md:px-16 xl:px-20"
    >
      <h2 className="mb-8 text-center text-4xl font-bold tracking-wide text-amber-300 uppercase">
        My Contact
      </h2>

      <ul className="space-y-6">
        {contactInfo.map(({ title, value, link }, index) => {
          const displayValue = value && value.trim() !== "" ? value : "-";
          const formattedLink =
            link && !link.startsWith("http") ? `https://${link}` : link;

          return (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border border-amber-400/50 bg-amber-400/10 px-6 py-4 transition hover:bg-amber-400/20"
            >
              <div className="flex items-center gap-3">
                {iconMap[title] || null}
                <span className="font-semibold text-amber-300">{title}</span>
              </div>

              {formattedLink ? (
                <a
                  href={formattedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[60%] truncate text-right font-medium text-amber-100 hover:text-amber-300"
                >
                  {displayValue}
                </a>
              ) : (
                <span className="max-w-[60%] truncate text-right font-medium text-amber-100">
                  {displayValue}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
