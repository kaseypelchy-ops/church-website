import Image from "next/image";
import Link from "next/link";

const events = [
  {
    month: "NOV",
    day: "16",
    title: "Sunday Worship",
    time: "10:00 AM",
    description:
      "Join us for worship, teaching, prayer, and community. Children's Church meets at the same time in the Kid Zone.",
  },
  {
    month: "NOV",
    day: "19",
    title: "Midweek Bible Study",
    time: "6:30 PM",
    description:
      "A relaxed opportunity to study Scripture, ask questions, and grow together during the week.",
  },
  {
    month: "NOV",
    day: "23",
    title: "Sunday Worship",
    time: "10:00 AM",
    description:
      "Gather with us for Sunday worship and Children's Church at 10:00 AM.",
  },
];

export default function EventsPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/community-event.jpg"
          alt="Church community gathering placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            Gather. Connect.
            <span>Be part of what&apos;s happening.</span>
          </h1>
        </div>
      </section>

      <section className="events-directory">
        <div className="events-directory-heading">
          <p className="eyebrow dark">WHAT&apos;S COMING UP</p>
          <h2>Upcoming at Salt & Light.</h2>
        </div>

        <div className="event-list">
          {events.map((event) => (
            <article className="event-row" key={`${event.month}-${event.day}-${event.title}`}>
              <div className="event-date-block">
                <span>{event.month}</span>
                <strong>{event.day}</strong>
              </div>

              <div className="event-row-copy">
                <p>{event.time}</p>
                <h3>{event.title}</h3>
                <span>{event.description}</span>
              </div>

              <div className="event-row-action">
                <Link href="/visit">Plan Your Visit →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="event-highlight">
        <div className="event-highlight-image">
          <Image
            src="/images/placeholders/landscape/missions-outreach.jpg"
            alt="Church outreach placeholder"
            width={1600}
            height={1000}
          />
        </div>

        <div className="event-highlight-copy">
          <p className="eyebrow dark">SERVE WITH US</p>
          <h2>
            Some of our most important events happen
            <span>out in the community.</span>
          </h2>

          <p>
            Food drives, coat collections, shoe drives, mission projects, and
            service days are all part of how we put faith into action.
          </p>

          <Link href="/missions">Explore Missions & Outreach →</Link>
        </div>
      </section>
    </main>
  );
}
