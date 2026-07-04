/** عناصر التنقل المشتركة بين الشريط الجانبي وشريط الجوال */

export interface NavItem {
  href: string;
  labelAr: string;
  icon: "cockpit" | "layers" | "rooms" | "risk" | "vault";
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", labelAr: "الكوكبت المالي", icon: "cockpit" },
  { href: "/ecosystem", labelAr: "الإيكوسيستم", icon: "layers" },
  { href: "/rooms", labelAr: "غرف أصحاب المصلحة", icon: "rooms" },
  { href: "/governance", labelAr: "المخاطر والحوكمة", icon: "risk" },
  { href: "/data-room", labelAr: "غرفة البيانات", icon: "vault" },
];
