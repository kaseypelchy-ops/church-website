import Image from "next/image";
import Link from "next/link";
import { SiteButtonLink } from "@/components/ui/site-button";

const outreachPrograms = [
  {
    title: "Community Food Drives",
    description:
      "Collecting food and essential items to support local families and community organizations.",
    status: "Community Outreach",
  },
  {
    title: "Winter Coat Drive",
    description:
      "Helping provide warm coats, hats, gloves, and winter clothing for people in need during colder months.",
    status: "Seasonal Outreach",
  },
  {
    title: "Shoe Drive",
    description:
      "Collecting new and gently used shoes to support individuals and families through local and mission partnerships.",
    status: "Donation Drive",
  },
  {
    title: "Mission Projects",
    description:
      "Supporting local and broader mission efforts through giving, service, volunteer opportunities, and special events.",
    status: "Missions",
  },
];

export default function MissionsPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/missions-outreach.jpg"
          alt="Community outreach placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            Faith that shows up
            <span>for our neighbors.</span>
          </h1>
        </div>
      </section>

      <section className="interior-intro">
        <div>
          <p className="eyebrow dark">FAITH IN ACTION</p>
          <h2>Serving beyond Sunday.</h2>
        </div>

        <div className="interior-copy">
          <p>
            Salt & Light Church believes serving others is an important part of
            living out our faith.
          </p>

          <p>
            Through local drives, mission projects, volunteer opportunities,
            and community events, we want to meet practical needs and build
            stronger relationships throughout the community.
          </p>
        </div>
      </section>

      <section className="outreach-feature">
        <div className="outreach-feature-image">
          <Image
            src="/images/placeholders/landscape/missions-outreach.jpg"
            alt="Volunteers serving the community placeholder"
            width={1600}
            height={1000}
          />
        </div>

        <div className="outreach-feature-copy">
          <p className="eyebrow dark">WHY WE SERVE</p>

          <h2>
            Small acts can make
            <span>a meaningful difference.</span>
          </h2>

          <p>
            Our outreach efforts create opportunities for members, families,
            local organizations, and community partners to serve side by side.
          </p>

          <p>
            This section will eventually feature current needs, collection
            deadlines, volunteer opportunities, impact updates, and photos from
            completed projects.
          </p>
        </div>
      </section>

      <section className="outreach-programs-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">WAYS WE SERVE</p>
            <h2>Community outreach.</h2>
          </div>

          <p>
            Current and recurring ways Salt & Light can support our neighbors
            and mission partners.
          </p>
        </div>

        <div className="outreach-grid">
          {outreachPrograms.map((program) => (
            <article className="outreach-card" key={program.title}>
              <p className="outreach-card-meta">{program.status}</p>
              <h3>{program.title}</h3>
              <p>{program.description}</p>

              <span>Details coming soon →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mission-event-banner">
        <div>
          <p className="eyebrow">MISSION EVENTS</p>

          <h2>
            Serve together.
            <span>Make an impact together.</span>
          </h2>
        </div>

        <div>
          <p>
            Mission dinners, donation events, packing projects, volunteer days,
            fundraisers, and other outreach events can all live here and feed
            into the main Events calendar.
          </p>

          <SiteButtonLink href="/events" variant="light">
            View Events
          </SiteButtonLink>
        </div>
      </section>
    </main>
  );
}
