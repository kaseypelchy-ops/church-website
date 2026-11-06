import Image from "next/image";

const team = [
  { name: "Team Member", role: "Vocals" },
  { name: "Team Member", role: "Guitar" },
  { name: "Team Member", role: "Keys" },
  { name: "Team Member", role: "Drums" },
];

export default function WorshipPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero worship-page-hero">
        <Image
          src="/images/placeholders/landscape/worship-band.jpg"
          alt="Worship team placeholder"
          fill
          priority
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <p className="eyebrow">WORSHIP AT SALT & LIGHT</p>
          <h1>
            Music that brings
            <span>people together.</span>
          </h1>
        </div>
      </section>

      <section className="interior-intro">
        <div>
          <p className="eyebrow dark">OUR WORSHIP TEAM</p>
          <h2>Leading with purpose.</h2>
        </div>

        <div className="interior-copy">
          <p>
            Our worship team helps lead the church through music, reflection,
            and praise each week.
          </p>

          <p>
            This page will eventually feature the musicians and vocalists who
            serve in the worship ministry, along with their stories and roles.
          </p>
        </div>
      </section>

      <section className="people-grid-section">
        <div className="people-grid">
          {team.map((person, index) => (
            <article className="person-card" key={index}>
              <div className="person-photo landscape-person-photo">
                <Image
                  src="/images/placeholders/landscape/worship-band.jpg"
                  alt={`${person.name} placeholder`}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="person-info">
                <h2>{person.name}</h2>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
