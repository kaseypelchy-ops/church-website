import Image from "next/image";
import Link from "next/link";
import { SiteButton, SiteButtonLink } from "@/components/ui/site-button";

const opportunities = [
  {
    title: "Serve in a Ministry",
    description:
      "Use your time and abilities to support worship, children, hospitality, events, and other areas of church life.",
  },
  {
    title: "Missions & Outreach",
    description:
      "Participate in food drives, clothing collections, community projects, mission events, and practical service opportunities.",
  },
  {
    title: "Join a Study",
    description:
      "Grow through Bible study, discussion, fellowship, and opportunities to learn alongside others.",
  },
  {
    title: "Prayer",
    description:
      "Share a prayer need or connect with others who want to pray and support you.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="interior-page">

      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/missions-outreach.jpg"
          alt="Church volunteers serving placeholder"
          fill
          priority
          className="interior-hero-image"
          sizes="100vw"
        />

        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            There&apos;s more than one way
            <span>to be part of the church.</span>
          </h1>
        </div>
      </section>

      <section className="interior-intro">
        <div>
          <p className="eyebrow dark">GET INVOLVED</p>
          <h2>Find your next step.</h2>
        </div>

        <div className="interior-copy">
          <p>
            Getting involved doesn&apos;t have to mean committing to everything
            at once. Start with one area that fits your interests, schedule, or
            desire to serve.
          </p>

          <p>
            As the site grows, each opportunity can include current needs,
            ministry leaders, volunteer requirements, schedules, and signup
            forms.
          </p>
        </div>
      </section>

      <section className="involvement-grid-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">WAYS TO PARTICIPATE</p>
            <h2>Start somewhere meaningful.</h2>
          </div>

          <p>
            Church life is stronger when people have clear, practical ways to
            participate.
          </p>
        </div>

        <div className="involvement-grid">
          {opportunities.map((item) => (
            <article className="involvement-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="involvement-feature">
        <div className="involvement-feature-image">
          <Image
            src="/images/placeholders/landscape/community-event.jpg"
            alt="Church community placeholder"
            width={1600}
            height={1000}
          />
        </div>

        <div className="involvement-feature-copy">
          <p className="eyebrow dark">SERVE TOGETHER</p>

          <h2>
            Your time can make
            <span>a real difference.</span>
          </h2>

          <p>
            Serving is one of the simplest ways to build relationships while
            helping meet real needs within the church and throughout the
            community.
          </p>

          <Link href="/missions">
            Explore Missions & Outreach →
          </Link>
        </div>
      </section>

      <section className="interest-form-section">
        <div className="interest-form-copy">
          <p className="eyebrow dark">I&apos;M INTERESTED</p>

          <h2>Tell us where you&apos;d like to start.</h2>

          <p>
            Let us know what you&apos;re interested in and someone from the
            church can help connect you with the right ministry or opportunity.
          </p>
        </div>

        <form className="church-form involvement-form">
          <div className="form-row">
            <label>
              First Name
              <input type="text" name="firstName" />
            </label>

            <label>
              Last Name
              <input type="text" name="lastName" />
            </label>
          </div>

          <label>
            Email
            <input type="email" name="email" />
          </label>

          <label>
            I&apos;m interested in
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Choose an area
              </option>
              <option value="ministry">Serving in a Ministry</option>
              <option value="missions">Missions & Outreach</option>
              <option value="study">Bible Study</option>
              <option value="worship">Worship Ministry</option>
              <option value="children">Children&apos;s Ministry</option>
              <option value="prayer">Prayer</option>
              <option value="other">Something Else</option>
            </select>
          </label>

          <label>
            Anything you&apos;d like us to know?
            <textarea name="message" rows={6} />
          </label>

          <SiteButton variant="dark">
            Send Interest
          </SiteButton>
        </form>
      </section>

      <section className="prayer-section">
        <div>
          <p className="eyebrow">PRAYER REQUESTS</p>

          <h2>
            You don&apos;t have to
            <span>carry everything alone.</span>
          </h2>
        </div>

        <div>
          <p>
            If there is something you would like prayer for, you can reach out
            to the church. We want to provide a respectful and caring place for
            people to share what they are going through.
          </p>

          <SiteButtonLink href="/contact" variant="light">
            Contact the Church
          </SiteButtonLink>
        </div>
      </section>

    </main>
  );
}
