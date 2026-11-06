import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

export default function VisitPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero visit-hero">
        <Image
          src="/images/placeholders/landscape/hero-worship.jpg"
          alt="Sunday worship placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            Your first Sunday
            <span>doesn&apos;t have to feel unfamiliar.</span>
          </h1>
        </div>
      </section>

      <section className="visit-overview">
        <div className="visit-primary">
          <p className="eyebrow dark">PLAN YOUR VISIT</p>
          <h2>Come as you are.</h2>

          <p>
            Visiting a church for the first time can come with a lot of
            questions. We want to make your first visit to Salt & Light simple,
            comfortable, and welcoming.
          </p>
        </div>

        <div className="visit-facts">
          <div>
            <span>Sunday Worship</span>
            <strong>10:00 AM</strong>
          </div>

          <div>
            <span>Children&apos;s Church</span>
            <strong>10:00 AM</strong>
            <p>Kid Zone</p>
          </div>

          <div>
            <span>Location</span>
            <strong>Port Allegany, PA</strong>
          </div>
        </div>
      </section>

      <section className="visit-expect">
        <div className="visit-expect-heading">
          <p className="eyebrow dark">WHAT TO EXPECT</p>
          <h2>Your Sunday morning.</h2>
        </div>

        <div className="visit-expect-grid">
          <article>
            <span>01</span>
            <h3>Arrive</h3>
            <p>
              Give yourself a few minutes to arrive, get settled, and find where
              you&apos;d like to sit.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Children</h3>
            <p>
              Children&apos;s Church begins at 10:00 AM in the Kid Zone while
              Sunday worship is taking place.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Worship</h3>
            <p>
              Expect music, prayer, Scripture, teaching, and time together as a
              church family.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Connect</h3>
            <p>
              Stay afterward, meet people, ask questions, and learn more about
              ministries and opportunities to get involved.
            </p>
          </article>
        </div>
      </section>

      <section className="visit-image-section">
        <div>
          <Image
            src="/images/placeholders/landscape/community-event.jpg"
            alt="Church community placeholder"
            width={1600}
            height={1000}
          />
        </div>

        <div>
          <p className="eyebrow dark">A PLACE TO BELONG</p>
          <h2>
            You don&apos;t have to know
            <span>everything before you walk in.</span>
          </h2>

          <p>
            Whether you&apos;re returning to church, visiting for the first
            time, or simply looking for a church community, you&apos;re welcome
            to join us.
          </p>

          <Link href="/ministries">Explore Our Ministries →</Link>
        </div>
      </section>

      <section className="interior-cta">
        <p className="eyebrow dark">SUNDAY AT SALT & LIGHT</p>
        <h2>We&apos;d be glad to have you with us.</h2>

        <div className="interior-cta-actions">
          <SiteButtonLink href="/events" variant="dark">
            View Upcoming Events
          </SiteButtonLink>

          <SiteButtonLink href="/about" variant="outline">
            Learn About Our Church
          </SiteButtonLink>
        </div>
      </section>
    </main>
  );
}
