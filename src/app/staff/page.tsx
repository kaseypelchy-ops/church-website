import Image from "next/image";

const staff = [
  {
    name: "Pastor Name",
    role: "Senior Pastor",
    image: "/images/placeholders/staff-leadership.jpg",
  },
  {
    name: "Staff Member",
    role: "Church Leadership",
    image: "/images/placeholders/staff-leadership.jpg",
  },
  {
    name: "Staff Member",
    role: "Ministry Leader",
    image: "/images/placeholders/staff-leadership.jpg",
  },
  {
    name: "Staff Member",
    role: "Church Staff",
    image: "/images/placeholders/staff-leadership.jpg",
  },
];

export default function StaffPage() {
  return (
    <main className="interior-page">
      <section className="simple-page-header">
        <p className="eyebrow">OUR PEOPLE</p>
        <h1>
          Staff &amp;
          <span>leadership.</span>
        </h1>

        <p>
          Meet the people who help lead, serve, and support the ministries of
          Salt & Light Church.
        </p>
      </section>

      <section className="people-grid-section">
        <div className="people-grid">
          {staff.map((person, index) => (
            <article className="person-card" key={`${person.name}-${index}`}>
              <div className="person-photo">
                <Image
                  src={person.image}
                  alt={`${person.name} placeholder`}
                  width={900}
                  height={1100}
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
