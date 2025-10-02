import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="box">
          <h2>Welcome to Holy Trinity Catholic Church</h2>
          <p>Join us as we Worship, Serve, and Grow Together in Faith.</p>
          <Link href="#mass-time" className="btn">
            Mass Time
          </Link>
          <Link href="#contact" className="btn btn-secondary">
            Live Stream
          </Link>
        </div>
      </div>
    </section>
  );
}
