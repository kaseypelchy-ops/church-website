import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

const ministries = [
  {
    title: "Children's Church",
    meta: "Sundays · 10:00 AM · Kid Zone",
    description:
      "A welcoming Sunday environment where children can learn, worship, and build friendships in an age-appropriate setting.",
    image: "/images/placeholders/landscape/community-event.jpg",
  },
  {
    title: "Bible Studies",
    meta: "Weekly Study Opportunities",
    description:
      "Small-group Bible studies focused on Scripture, discussion, practical application, and growing together in faith.",
    image: "/images/placeholders/landscape/bible-study.jpg",
  },
  {
    title: "Youth Ministry",
    meta: "Students & Young People",
    description:
      "A place for young people to build meaningful friendships, ask questions, grow in faith, and serve alongside the church.",
    image: "/images/placeholders/landscape/community-event.jpg",
  },
  {
    title: "Adult Fellowship",
    meta: "Connection & Community",
    description:
      "Opportunities for adults to connect outside Sunday worship through fellowship, study, service, and shared experiences.",
    image: "/images/placeholders/landscape/bible-study.jpg",
  },
  {
    title: "Worship Ministry",
    meta: "Music & Worship",
    description:
      "Musicians and vocalists serving together to help lead the church in worship each week.",
    image: "/images/placeholders/landscape/worship-band.jpg",
  },
  {
    title: "Missions & Outreach",
    meta: "Faith in Action",
    description:
      "Practical opportunities to serve our neighbors through local outreach, donation drives, missions, and community projects.",
    image: "/images/placeholders/landscape/missions-outreach.jpg",
  },
];

export default function MinistriesPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/bible-study.jpg"
          alt="Bible study placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            Find a place to
            <span>grow and belong.</span>
          </h1>
        </div>
      </section>

      <section className="interior-intro">
        <div>
          <p className="eyebrow dark">MINISTRIES AT SALT & LIGHT</p>
          <h2>Faith grows in community.</h2>
        </div>

        <div className="interior-copy">
          <p>
            Our ministries are designed to give people practical ways to grow
            in faith, build relationships, serve others, and participate in the
            life of the church.
          </p>

          <p>
            As we continue building this site, each ministry can eventually
            have its own page with schedules, leaders, registration details,
            resources, and upcoming events.
          </p>
        </div>
      </section>

      <section className="ministry-directory">
        {ministries.map((ministry, index) => (
          <article
            className={`ministry-feature ${
              index % 2 === 1 ? "ministry-feature-reverse" : ""
            }`}
            key={ministry.title}
          >
            <div className="ministry-feature-image">
              <Image
                src={ministry.image}
                alt={`${ministry.title} placeholder`}
                width={1400}
                height={1000}
              />
            </div>

            <div className="ministry-feature-copy">
              <p className="ministry-meta">{ministry.meta}</p>
              <h2>{ministry.title}</h2>
              <p>{ministry.description}</p>

              {ministry.title === "Missions & Outreach" ? (
                <Link href="/missions">Explore Missions & Outreach →</Link>
              ) : ministry.title === "Worship Ministry" ? (
                <Link href="/worship">Meet the Worship Team →</Link>
              ) : (
                <span className="coming-soon-link">
                  More information coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="interior-cta">
        <p className="eyebrow dark">GET INVOLVED</p>
        <h2>There is a place for you to participate.</h2>

        <div className="interior-cta-actions">
          <SiteButtonLink href="/visit" variant="dark">
            Plan Your Visit
          </SiteButtonLink>

          <SiteButtonLink href="/missions" variant="outline">
            Explore Outreach
          </SiteButtonLink>
        </div>
      </section>
    </main>
  );
}
