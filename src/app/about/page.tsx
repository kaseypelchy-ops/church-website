import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

export default function AboutPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/community-event.jpg"
          alt="Church community placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <p className="eyebrow">ABOUT SALT & LIGHT</p>
          <h1>
            A church centered on
            <span>faith, community, and service.</span>
          </h1>
        </div>
      </section>

      <section className="interior-intro">
        <div>
          <p className="eyebrow dark">WHO WE ARE</p>
          <h2>More than a place to attend.</h2>
        </div>

        <div className="interior-copy">
          <p>
            Salt & Light Church is a community of people growing in faith,
            worshiping together, serving our neighbors, and helping one another
            live out what we believe.
          </p>

          <p>
            Whether someone has been part of a church for years or is simply
            looking for a place to begin, our goal is to create a welcoming
            environment where people can connect, learn, and serve.
          </p>
        </div>
      </section>

      <section className="split-feature">
        <div className="split-feature-image">
          <Image
            src="/images/placeholders/landscape/bible-study.jpg"
            alt="Bible study placeholder"
            width={1400}
            height={1000}
          />
        </div>

        <div className="split-feature-copy">
          <p className="eyebrow dark">GROW TOGETHER</p>
          <h2>
            Faith is something
            <span>we live together.</span>
          </h2>

          <p>
            From worship and Bible study to missions and community outreach,
            Salt & Light is built around practical ways for people to grow and
            participate.
          </p>

          <Link href="/ministries">Explore Ministries →</Link>
        </div>
      </section>

      <section className="interior-cta">
        <p className="eyebrow">MEET THE PEOPLE</p>
        <h2>Get to know our church family.</h2>

        <div className="interior-cta-actions">
          <SiteButtonLink href="/staff" variant="dark">
            Staff & Leadership
          </SiteButtonLink>

          <SiteButtonLink href="/worship" variant="outline">
            Worship Team
          </SiteButtonLink>
        </div>
      </section>
    </main>
  );
}
