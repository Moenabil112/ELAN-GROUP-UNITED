/** أيقونات خطية هادئة — لا رموز تقنية مبالغاً فيها */

const PATHS: Record<string, React.ReactNode> = {
  cockpit: (
    <>
      <path d="M3 20h18" />
      <path d="M5 16v-5M10 16V8M15 16v-3M20 16V5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  rooms: (
    <>
      <rect x="3" y="4" width="8" height="7" rx="1" />
      <rect x="13" y="4" width="8" height="7" rx="1" />
      <rect x="3" y="13" width="8" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="7" rx="1" />
    </>
  ),
  risk: (
    <>
      <path d="M12 4l9 16H3l9-16z" />
      <path d="M12 10v4M12 17.5v.5" />
    </>
  ),
  vault: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M8 9V6.5a4 4 0 018 0V9" />
    </>
  ),
};

export default function NavIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
