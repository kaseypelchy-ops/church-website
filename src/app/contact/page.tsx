import Image from "next/image";
import Link from "next/link";
import { SiteButton, SiteButtonLink } from "@/components/ui/site-button";

export default function ContactPage() {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <Image
          src="/images/placeholders/landscape/community-event.jpg"
          alt="Church community placeholder"
          fill
          priority
          className="interior-hero-image"
          sizes="100vw"
        />

        <div className="interior-hero-overlay" />

        <div className="interior-hero-content">
          <h1>
            We&apos;d be glad
            <span>to hear from you.</span>
          </h1>
        </div>
      </section>

      <section className="contact-intro">
        <div>
          <p className="eyebrow dark">CONTACT SALT & LIGHT</p>
          <h2>Questions are welcome.</h2>

          <p>
            Whether you&apos;re planning a first visit, looking for a ministry,
            asking about an event, or simply trying to learn more about the
            church, you can reach out here.
          </p>
        </div>

        <div className="contact-details">
          <article>
            <span>Sunday Worship</span>
            <strong>10:00 AM</strong>
          </article>

          <article>
            <span>Children&apos;s Church</span>
            <strong>10:00 AM</strong>
            <p>Kid Zone</p>
          </article>

          <article>
            <span>Location</span>
            <strong>Port Allegany, Pennsylvania</strong>
          </article>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-heading">
          <p className="eyebrow dark">SEND A MESSAGE</p>
          <h2>How can we help?</h2>

          <p>
            This form is currently the front-end design. We&apos;ll connect it
            to the site&apos;s database and church admin tools when we build the
            dynamic layer.
          </p>
        </div>

        <form className="church-form">
          <div className="form-row">
            <label>
              First Name
              <input type="text" name="firstName" autoComplete="given-name" />
            </label>

            <label>
              Last Name
              <input type="text" name="lastName" autoComplete="family-name" />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" autoComplete="email" />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
          </div>

          <label>
            What can we help with?
            <select name="topic" defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              <option value="visit">Planning a Visit</option>
              <option value="ministry">Ministry Question</option>
              <option value="event">Event Question</option>
              <option value="missions">Missions & Outreach</option>
              <option value="giving">Giving Question</option>
              <option value="general">General Question</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={7} />
          </label>

          <SiteButton type="button" variant="dark">
            Send Message
          </SiteButton>
        </form>
      </section>

      <section className="contact-next-steps">
        <div>
          <p className="eyebrow">NEW HERE?</p>
          <h2>
            Your next step can be
            <span>as simple as showing up.</span>
          </h2>
        </div>

        <div>
          <p>
            If you&apos;re thinking about visiting Salt & Light, our Plan Your
            Visit page covers Sunday times, Children&apos;s Church, what to
            expect, and how to get connected.
          </p>

          <SiteButtonLink href="/visit" variant="light">
            Plan Your Visit
          </SiteButtonLink>
        </div>
      </section>
    </main>
  );
}
