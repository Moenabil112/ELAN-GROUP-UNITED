"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav";
import NavIcon from "./NavIcon";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__entity num">ELAN GROUP UNITED</span>
        <span className="sidebar__tag">كوكبت أصحاب المصلحة — نافذة خاصة</span>
      </div>
      <nav className="sidebar__nav" aria-label="التنقل الرئيسي">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar__link${pathname === item.href ? " is-active" : ""}`}
          >
            <NavIcon name={item.icon} />
            {item.labelAr}
          </Link>
        ))}
      </nav>
      <div className="sidebar__foot">
        نافذة داخلية لأصحاب المصلحة — ليست دعوة استثمار عامة. جميع الأرقام
        توضيحية وخاضعة للمراجعة المهنية المستقلة.
      </div>
    </aside>
  );
}
