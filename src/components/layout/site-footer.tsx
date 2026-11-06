import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src="/images/brand/salt-and-light-compact.png"
          alt="Salt & Light Church"
          width={110}
          height={110}
        />
      </div>

      <div>
        <span>Sunday Worship</span>
        <strong>10:00 AM</strong>
        <p>Children&apos;s Church · 10:00 AM</p>
        <p>Kid Zone</p>
      </div>

      <div>
        <span>Connect</span>
        <Link href="#">Facebook</Link>
        <Link href="#">YouTube</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div>
        <span>Visit</span>
        <p>Port Allegany, Pennsylvania</p>
        <Link href="/visit">Plan Your Visit →</Link>
      </div>
    </footer>
  );
}
