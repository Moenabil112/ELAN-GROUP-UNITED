"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav";
import NavIcon from "./NavIcon";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="mobile-nav" aria-label="التنقل السفلي">
      <div className="mobile-nav__row">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav__link${pathname === item.href ? " is-active" : ""}`}
          >
            <NavIcon name={item.icon} />
            {item.labelAr}
          </Link>
        ))}
      </div>
    </nav>
  );
}
