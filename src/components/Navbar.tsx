import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-primary text-white"
        : "text-ink-700 hover:bg-ink-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-base/95 backdrop-blur">
      <div className="container-base section-padding">
        <div className="flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="font-display text-lg font-semibold text-ink-900"
          >
            {profile.name}
          </NavLink>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-ink-200 p-2 text-ink-700 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-ink-100 bg-base md:hidden">
          <div className="container-base section-padding flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
