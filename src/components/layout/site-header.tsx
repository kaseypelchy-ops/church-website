"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SiteButtonLink } from "@/components/ui/site-button";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/missions", label: "Missions" },
  { href: "/events", label: "Events" },
  { href: "/worship", label: "Worship" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/give", label: "Give" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header shared-header">
      <Link
        className="brand brand-logo"
        href="/"
        aria-label="Salt & Light Church home"
      >
        <Image
          src="/images/brand/salt-and-light-primary.png"
          alt="Salt & Light Church"
          width={330}
          height={100}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="desktop-header-cta">
        <SiteButtonLink href="/visit" variant="light">
          Plan Your Visit
        </SiteButtonLink>
      </div>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <SiteButtonLink href="/visit" variant="light">
          Plan Your Visit
        </SiteButtonLink>
      </div>
    </header>
  );
}
