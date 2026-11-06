import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

export default function SiteHeader() {
  return (
    <header className="site-header shared-header">
      <Link className="brand brand-logo" href="/">
        <Image
          src="/images/brand/salt-and-light-primary.png"
          alt="Salt & Light Church"
          width={330}
          height={100}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/ministries">Ministries</Link>
        <Link href="/missions">Missions</Link>
        <Link href="/events">Events</Link>
        <Link href="/worship">Worship</Link>
        <Link href="/get-involved">Get Involved</Link>
        <Link href="/give">Give</Link>
      </nav>

      <SiteButtonLink href="/visit" variant="light">
        Plan Your Visit
      </SiteButtonLink>
    </header>
  );
}
