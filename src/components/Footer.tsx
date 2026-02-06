import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const socialItems = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const Footer = () => (
  <footer className="border-t border-ink-100 bg-white">
    <div className="container-base section-padding py-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-ink-900">
            {profile.name}
          </p>
          <p className="text-sm text-ink-600">{profile.title}</p>
        </div>
        <div className="flex items-center gap-4">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition hover:border-secondary hover:text-secondary"
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="mt-6 text-xs text-ink-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </div>
  </footer>
);
