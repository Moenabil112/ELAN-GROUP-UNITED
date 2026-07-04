/** عناصر التنقل المشتركة بين الشريط الجانبي وشريط الجوال */

export interface NavItem {
  href: string;
  labelAr: string;
  /** تسمية مختصرة لشريط الجوال السفلي */
  shortAr: string;
  icon: "cockpit" | "layers" | "rooms" | "risk" | "vault";
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", labelAr: "غرفة القيادة المالية", shortAr: "القيادة المالية", icon: "cockpit" },
  { href: "/ecosystem", labelAr: "منظومة إيلان", shortAr: "المنظومة", icon: "layers" },
  { href: "/rooms", labelAr: "غرف أصحاب القرار", shortAr: "الغرف", icon: "rooms" },
  { href: "/governance", labelAr: "حوكمة القرار والمخاطر", shortAr: "الحوكمة", icon: "risk" },
  { href: "/data-room", labelAr: "غرفة البيانات والمستندات", shortAr: "المستندات", icon: "vault" },
];
