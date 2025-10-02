export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Holy Trinity Catholic
              Church, Aba-Panu Apata, Ibadan, Nigeria
            </p>
            <p>
              <i className="fas fa-phone"></i> (123) 456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@holytrinityabadan.org
            </p>

            <h3 style={{ marginTop: "30px" }}>Office Hours</h3>
            <p>
              <i className="fas fa-clock"></i> Monday-Friday: 9:00 AM - 5:00 PM
            </p>
            <p>
              <i className="fas fa-clock"></i> Saturday: 10:00 AM - 2:00 PM
            </p>
            <p>
              <i className="fas fa-clock"></i> Sunday: Closed
            </p>

            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            {/* <form id="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sacraments">Sacraments</option>
                  <option value="donations">Donations</option>
                  <option value="events">Events</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
