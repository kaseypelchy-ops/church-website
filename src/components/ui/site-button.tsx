import Link from "next/link";

type Variant = "dark" | "light" | "gold" | "outline";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
};

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  type?: "button" | "submit";
};

function classes(variant: Variant) {
  return `salt-button salt-button--${variant}`;
}

export function SiteButtonLink({
  href,
  children,
  variant = "dark",
}: LinkButtonProps) {
  return (
    <Link href={href} className={classes(variant)}>
      {children}
    </Link>
  );
}

export function SiteButton({
  children,
  variant = "dark",
  type = "button",
}: ActionButtonProps) {
  return (
    <button type={type} className={classes(variant)}>
      {children}
    </button>
  );
}
