import Link from "next/link";
import styles from "./site-button.module.css";

type Variant = "dark" | "light" | "gold" | "outline";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
};

function classes(variant: Variant, className?: string) {
  return [
    styles.base,
    styles[variant],
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function SiteButtonLink({
  href,
  children,
  variant = "dark",
  className,
}: LinkButtonProps) {
  return (
    <Link href={href} className={classes(variant, className)}>
      {children}
    </Link>
  );
}

export function SiteButton({
  children,
  variant = "dark",
  className,
  type = "button",
}: ActionButtonProps) {
  return (
    <button type={type} className={classes(variant, className)}>
      {children}
    </button>
  );
}
