import { useState, useEffect, useRef } from "react";
import { OutstationHeader } from "@/components/outstation/OutstationHeader";
import { OutstationNavigation } from "@/components/outstation/OutstationNavigation";
import { OutstationFooter } from "@/components/outstation/OutstationFooter";
import { GalleryModal } from "@/components/outstation/GalleryModal";
import { Music, Heart, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Outstation() {
  const { toast } = useToast();
  const [modalImage, setModalImage] = useState({ src: "", alt: "", isOpen: false });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt, isOpen: true });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <OutstationHeader />
      <OutstationNavigation />

      {/* Hero Section */}
      <section className="relative bg-[#5D4037] text-white text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[rgba(93,64,55,0.85)] z-[1]"></div>
        <div className="container mx-auto relative z-[2]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-[#b5892b] font-serif leading-tight px-4">
            Welcome to St. John of the Cross Catholic Outstation
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-[800px] mx-auto mb-6 sm:mb-8 px-4">
            Join our faith community in Elebu, Ibadan as we grow in faith, hope, and love through worship and service.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
            <a href="#mass-times" className="inline-block bg-[#b5892b] text-[#523826] px-5 sm:px-6 py-3 no-underline rounded font-bold hover:bg-white hover:-translate-y-1 transition-all text-sm sm:text-base">
              Mass Times
            </a>
            <a href="#contact" className="inline-block bg-[#b5892b] text-[#523826] px-5 sm:px-6 py-3 no-underline rounded font-bold hover:bg-white hover:-translate-y-1 transition-all text-sm sm:text-base">
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6" id="about">
        <div className="container mx-auto">
          <h2 className="text-center mb-6 sm:mb-8 text-[#523826] text-2xl sm:text-3xl lg:text-4xl font-serif relative pb-4">
            About Our Outstation
            <span className="block w-16 sm:w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: "Our History", content: "St. John of the Cross Outstation was established in 2005 to serve the growing Catholic community in Elebu and surrounding areas. We began with just 20 families and have grown to over 150 families today." },
              { title: "Our Patron Saint", content: "St. John of the Cross was a Spanish Catholic priest, mystic, and Doctor of the Church. He is known for his reforms and writings on spiritual growth and the dark night of the soul." },
              { title: "Our Mission", content: "To nurture a vibrant Catholic community through worship, education, service, and fellowship, following the example of Jesus Christ and our patron saint." }
            ].map((item, i) => (
              <div 
                key={i} 
                ref={(el) => cardsRef.current[i] = el}
                className="bg-[#fbf6ef] rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-all opacity-0 translate-y-5 duration-500"
              >
                <div className="bg-[#6f3f22] text-white p-4 text-center">
                  <h3 className="font-serif">{item.title}</h3>
                </div>
                <div className="p-5">
                  <p className="mb-4">{item.content}</p>
                  <a href="#" className="inline-block bg-[#b5892b] text-[#523826] px-6 py-3 no-underline rounded font-bold hover:bg-white hover:-translate-y-1 transition-all">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mass Times Section */}
      <section className="py-12 px-6 bg-[#fbf6ef]" id="mass-times">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Mass Times & Schedule
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { day: "Weekdays", times: ["Tuesday & Thursday: 6:00 PM"] },
              { day: "Saturdays", times: ["Vigil Mass: 5:00 PM", "Confessions: 4:00 - 4:45 PM"] },
              { day: "Sundays", times: ["8:00 AM (English)", "10:00 AM (Yoruba)"] }
            ].map((mass, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-[#523826] mb-4 border-b-2 border-[#b5892b] pb-2 font-serif">{mass.day}</h3>
                {mass.times.map((time, j) => (
                  <p key={j} className="mb-2 text-lg">{time}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacraments Section */}
      <section className="py-12 px-6" id="sacraments">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Sacraments
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Baptism", content: "Baptisms are held on the second Sunday of each month. Preparation classes are required for parents and godparents." },
              { title: "First Communion", content: "Children typically receive First Communion after two years of religious education. Classes begin in September." },
              { title: "Confirmation", content: "Confirmation preparation is a two-year program for youth. Adults seeking confirmation should contact the office." }
            ].map((item, i) => (
              <div key={i} className="bg-[#fbf6ef] rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-all">
                <div className="bg-[#6f3f22] text-white p-4 text-center">
                  <h3 className="font-serif">{item.title}</h3>
                </div>
                <div className="p-5">
                  <p className="mb-4">{item.content}</p>
                  <a href="#" className="inline-block bg-[#b5892b] text-[#523826] px-6 py-3 no-underline rounded font-bold hover:bg-white hover:-translate-y-1 transition-all">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-12 px-6" id="ministries">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Ministries
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Music, title: "Choir", content: "Our choir enhances liturgical celebrations with beautiful music. Rehearsals every Wednesday at 6:00 PM." },
              { icon: Heart, title: "Charity Ministry", content: "We serve the needy in our community through various outreach programs. Join us in making a difference." },
              { icon: Book, title: "Bible Study", content: "Deepen your understanding of Scripture through our weekly Bible study groups. All levels welcome." }
            ].map((ministry, i) => {
              const Icon = ministry.icon;
              return (
                <div key={i} className="bg-[#fbf6ef] rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-all">
                  <div className="bg-[#6f3f22] text-white p-4 text-center flex items-center justify-center gap-2">
                    <Icon className="h-6 w-6" />
                    <h3 className="font-serif">{ministry.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4">{ministry.content}</p>
                    <a href="#" className="inline-block bg-[#b5892b] text-[#523826] px-6 py-3 no-underline rounded font-bold hover:bg-white hover:-translate-y-1 transition-all">
                      Join Us
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-6" id="events">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Upcoming Events
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid gap-5">
            {[
              { day: "15", month: "Aug", title: "Feast of the Assumption", description: "Holy Day of Obligation. Special masses throughout the day." },
              { day: "10", month: "Sep", title: "Outstation Festival", description: "Annual festival with food, games, and community activities." },
              { day: "20", month: "Sep", title: "Youth Day", description: "Special mass and activities for our youth community." }
            ].map((event, i) => (
              <div key={i} className="flex bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-[#6f3f22] text-white p-5 text-center min-w-[100px] flex flex-col justify-center">
                  <span className="text-3xl font-bold block">{event.day}</span>
                  <span className="text-lg uppercase">{event.month}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-[#523826] mb-2 font-serif">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6 bg-[#fbf6ef]" id="gallery">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Photo Gallery
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { caption: "Our Church Building", placeholder: "Church Building" },
              { caption: "Community Gathering", placeholder: "Community Event" },
              { caption: "Choir Ministry", placeholder: "Choir Performance" },
              { caption: "Children's Program", placeholder: "Children's Program" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="h-[200px] rounded-lg overflow-hidden relative cursor-pointer group"
                onClick={() => openModal(`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%235D4037'/><text x='150' y='100' font-family='Arial' font-size='20' fill='%23D4AF37' text-anchor='middle'>${item.placeholder}</text></svg>`, item.caption)}
              >
                <img 
                  src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%235D4037'/><text x='150' y='100' font-family='Arial' font-size='20' fill='%23D4AF37' text-anchor='middle'>${item.placeholder}</text></svg>`}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(139,69,19,0.8)] text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6" id="contact">
        <div className="container mx-auto">
          <h2 className="text-center mb-8 text-[#523826] text-3xl font-serif relative pb-4">
            Contact Us
            <span className="block w-20 h-1 bg-[#b5892b] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[#523826] mb-5 font-serif">Get in Touch</h3>
              <p className="mb-4 flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i> St. John of the Cross Catholic Outstation, Elebu, Ibadan, Nigeria
              </p>
              <p className="mb-4 flex items-center gap-2">
                <i className="fas fa-phone"></i> (123) 456-7890
              </p>
              <p className="mb-4 flex items-center gap-2">
                <i className="fas fa-envelope"></i> elebu@holytrinityabadan.org
              </p>
              <div className="flex gap-4 mt-5">
                {[
                  { icon: "fab fa-facebook-f", href: "#" },
                  { icon: "fab fa-twitter", href: "#" },
                  { icon: "fab fa-instagram", href: "#" },
                  { icon: "fab fa-youtube", href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="text-white bg-[#6f3f22] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b5892b] hover:text-[#523826] transition-all">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#523826] mb-5 font-serif">Send us a Message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="mb-5">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded text-base focus:border-[#6f3f22] outline-none"
                  />
                </div>
                <div className="mb-5">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="w-full p-3 border border-gray-300 rounded text-base focus:border-[#6f3f22] outline-none"
                  />
                </div>
                <div className="mb-5">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    className="w-full p-3 border border-gray-300 rounded text-base focus:border-[#6f3f22] outline-none resize-y min-h-[120px]"
                  ></textarea>
                </div>
                <button type="submit" className="inline-block bg-[#b5892b] text-[#523826] px-6 py-3 rounded font-bold border-none cursor-pointer hover:bg-white hover:-translate-y-1 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <OutstationFooter />
      <GalleryModal 
        isOpen={modalImage.isOpen}
        onClose={() => setModalImage({ src: "", alt: "", isOpen: false })}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
      />
    </div>
  );
}
