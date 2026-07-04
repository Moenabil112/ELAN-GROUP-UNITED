export default function CTAButton({
  labelAr,
  primary = false,
  href = "#",
}: {
  labelAr: string;
  primary?: boolean;
  href?: string;
}) {
  return (
    <a
      className={`cta-button${primary ? " cta-button--primary" : ""}`}
      href={href}
      role="button"
    >
      {labelAr}
    </a>
  );
}
