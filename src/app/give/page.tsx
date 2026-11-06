import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

export default function GivePage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/missions-outreach.jpg"
          alt="Community outreach placeholder"
          fill
          priority
          className="interior-hero-image"
          sizes="100vw"
        />

        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            Giving helps make
            <span>ministry possible.</span>
          </h1>
        </div>
      </section>

      <section className="giving-purpose">
        <div>
          <p className="eyebrow dark">WHY WE GIVE</p>
          <h2>Generosity becomes action.</h2>
        </div>

        <div className="giving-purpose-grid">
          <article>
            <span>Church Ministry</span>
            <p>
              Supporting worship, discipleship, children&apos;s ministry,
              teaching, facilities, and the day-to-day work of the church.
            </p>
          </article>

          <article>
            <span>Missions</span>
            <p>
              Helping support mission efforts, ministry partners, and
              opportunities to serve beyond our own congregation.
            </p>
          </article>

          <article>
            <span>Community Outreach</span>
            <p>
              Supporting food drives, clothing drives, service projects, and
              practical ways to care for people in our community.
            </p>
          </article>
        </div>
      </section>

      <section className="online-giving-section" id="online-giving">
        <div className="online-giving-card">
          <div>
            <p className="eyebrow">ONLINE GIVING</p>

            <h2>Give securely through Tithe.ly.</h2>

            <p>
              Salt & Light Church uses Tithe.ly for online giving. Your
              generosity helps support ministry, missions, outreach, and the
              ongoing work of the church.
            </p>
          </div>

          <div className="giving-action">
            <SiteButtonLink href="#" variant="light">Give Online</SiteButtonLink>

            <small>Secure online giving powered by Tithe.ly</small>
          </div>
        </div>
      </section>

      <section className="giving-outreach">
        <div>
          <Image
            src="/images/placeholders/landscape/community-event.jpg"
            alt="Community service placeholder"
            width={1600}
            height={1000}
          />
        </div>

        <div>
          <p className="eyebrow dark">BEYOND FINANCIAL GIVING</p>

          <h2>
            Generosity also means
            <span>giving your time.</span>
          </h2>

          <p>
            Serving, volunteering, participating in outreach projects, and
            helping meet practical needs are all meaningful ways to give.
          </p>

          <Link href="/missions">Find Ways to Serve →</Link>
        </div>
      </section>
    </main>
  );
}
