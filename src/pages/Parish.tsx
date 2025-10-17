import { useState, useEffect } from "react";
import { ParishHeader } from "@/components/common/ParishHeader";
import { ParishNavigation, parishNavItems } from "@/components/common/ParishNavigation";
import { LeaderCard } from "@/components/common/LeaderCard";
import { Loader } from "@/components/common/Loader";
import { BackToTop } from "@/components/common/BackToTop";
import { ImageModal } from "@/components/parish/ImageModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Church, Users, HandHeart, Book, Clock, Music, Hand, Calendar, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export default function Parish() {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", contactForm);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      
      <ParishHeader 
        title="Holy Trinity Catholic Church" 
        subtitle="Aba-Panu, Apata, Ibadan, Nigeria"
        location="Catholic Archdiocese of Ibadan"
      />
      
      <ParishNavigation items={parishNavItems} />

      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#0b3b57] to-[#6b2f2f] text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4 text-[#b5892b] leading-tight">
            Welcome to Holy Trinity Catholic Church
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Join us as we Worship, Serve, and Grow Together in Faith.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4">
            <Button asChild size="lg" className="bg-[#b5892b] hover:bg-white hover:text-[#0b3b57] text-white w-full sm:w-auto">
              <a href="#mass-times">Mass Time</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-[#b5892b] text-[#b5892b] hover:bg-[#b5892b] hover:text-white w-full sm:w-auto">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f3efe9]">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-center mb-8 sm:mb-12 text-[#6b2f2f] section-underline">Why Join Our Parish</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Church, title: "Spiritual Growth", desc: "Deepen your faith through our liturgical celebrations and spiritual programs." },
              { icon: Users, title: "Community", desc: "Join a welcoming community that supports each other in faith and daily life." },
              { icon: HandHeart, title: "Service Opportunities", desc: "Serve others through our various ministries and outreach programs." },
              { icon: Book, title: "Faith Formation", desc: "Grow in knowledge and understanding of the Catholic faith through our programs." },
            ].map((feature, i) => (
              <Card key={i} className="text-center shadow-card hover:-translate-y-2 transition-smooth animate-on-scroll bg-white">
                <CardContent className="pt-8 pb-6">
                  <feature.icon className="h-12 w-12 text-[#0b3b57] mx-auto mb-4" />
                  <h3 className="font-serif text-xl mb-3 text-[#6b2f2f]">{feature.title}</h3>
                  <p className="text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mass Times Section */}
      <section id="mass-times" className="py-16 px-6 bg-[#c06c50]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-10 text-white section-underline">Mass Time & Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { title: "Weekdays", times: ["Monday 5:45 AM", "Tuesday & Thursday 6:00 AM"] },
              { title: "Saturdays", times: ["Morning Mass: 7:00 AM", "Confessions: 8:00 AM"] },
              { title: "Sundays", times: ["8:00 AM (English)"] },
            ].map((schedule, i) => (
              <Card key={i} className="shadow-elegant hover:-translate-y-2 transition-smooth border-l-6 border-[#b5892b] animate-on-scroll">
                <CardContent className="pt-5">
                  <h3 className="text-2xl font-serif mb-3 text-[#6b2f2f] border-b-2 border-[#b5892b] pb-3">{schedule.title}</h3>
                  {schedule.times.map((time, j) => (
                    <p key={j} className="flex items-center gap-2 mb-3 text-base">
                      <Clock className="h-4 w-4 text-[#0b3b57]" /> {time}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-10 text-[#6b2f2f] section-underline">About Our Parish</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Our History", content: "Holy Trinity Catholic Church was established in 1995 to serve the growing Catholic community in Aba-Panu Apata and surrounding areas. We began with just 35 families and have grown to over 150 families today." },
              { title: "Our Mission", content: "To be a vibrant Catholic community that worships together, grows in faith, and serves others following the example of Jesus Christ." },
              { title: "Pastoral Team", content: "Meet our dedicated pastoral team who serve our community with love and commitment." },
            ].map((item, i) => (
              <Card key={i} className="shadow-card hover:-translate-y-2 transition-smooth animate-on-scroll">
                <CardHeader className="bg-[#0b3b57] text-white">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-0">{item.content}</p>
                  {/*<Button className="bg-[#b5892b] hover:bg-[#0b3b57] text-white">Learn More</Button>*/}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-2 bg-[#f6f4f1]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Our Spiritual Leaders</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <LeaderCard imageSrc="/img/pope leo xiv.jpeg" title="His Holiness" name="Pope Leo XIV" />
            <LeaderCard imageSrc="/img/bishop.jpg" title="His Grace" name="Most Rev. Dr. Gabriel Leke Abegunrin" subtitle="Archbishop of Ibadan" />
            <LeaderCard imageSrc="/img/Steve.jpg" title="" name="Rev. Fr Stephen Udechukwu" subtitle="Priest In-Charge" />
          </div>
        </div>
      </section>

      {/* Sacraments Section */}
      <section id="sacraments" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Sacraments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Baptism", content: "Baptisms are held on the first and third Sundays of each month. Preparation classes are required for parents and godparents." },
              { title: "First Communion", content: "Children typically receive First Communion after two years of religious education. Classes begin in September." },
              { title: "Confirmation", content: "Confirmation preparation is a two-year program for youth. Adults seeking confirmation should contact the office." },
            ].map((sacrament, i) => (
              <Card key={i} className="shadow-card hover:-translate-y-2 transition-smooth animate-on-scroll">
                <CardHeader className="bg-[#0b3b57] text-white">
                  <CardTitle>{sacrament.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">{sacrament.content}</p>
                  <h2>Enroll your children</h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-16 px-6 bg-gradient-to-b from-white to-[#f3efe9]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Parish Ministries</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Music,
                title: "Choir Ministry",
                desc: "Our choir enhances liturgical celebrations with beautiful sacred music.",
                details: [
                  { label: "Rehearsals", value: "Friday & Saturdays at 5:00 PM" },
                  { label: "Contact Choir Ms", value: "Mr. Festus Abibu - 09063410785" },
                  { label: "Contact Choir Ms", value: "Mr. Godwin - 08032123304" },
                ]
              },
              {
                icon: Hand,
                title: "St. Vincent the Poor",
                desc: "We serve the needy in our community through various outreach programs.",
                details: [
                  { label: "Meetings", value: "2nd Saturday at 10:00 AM" },
                  { label: "Contact", value: "Mr. Chukwu - 0805 123 4567" },
                ]
              },
              
              {
                icon: Book,
                title: "Bible Study",
                desc: "Deepen your understanding of Scripture through our weekly study groups.",
                details: [
                  { label: "Schedule", value: "Comming soon" },
                  /* { label: "Contact", value: "Dr. Okoro - 0802 987 6543" },*/
                ]
              }
              
            ].map((ministry, i) => (
              <Card key={i} className="shadow-card hover:-translate-y-2 transition-smooth animate-on-scroll">
                <CardHeader className="bg-[#c06c50] text-white text-center">
                  <ministry.icon className="h-12 w-12 mx-auto mb-0" />
                  <CardTitle>{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <p className="mb-4">{ministry.desc}</p>
                  <ul className="space-y-2 mb-0">
                    {ministry.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm border-b pb-2">
                        <Clock className="h-4 w-4 text-[#0b3b57] mt-0.5" />
                        <span><strong>{detail.label}:</strong> {detail.value}</span>
                      </li>
                    ))}
                  </ul>
                { /* <Button className="w-full bg-[#b5892b] hover:bg-[#0b3b57] text-white">Join Us</Button>*/}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-6 bg-[#f6f4f1]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Upcoming Events</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { day: "15", month: "Aug", title: "Feast of the Assumption", time: "All Day Event", desc: "Holy Day of Obligation. Special masses throughout the day." },
              { day: "10", month: "Sep", title: "Parish Festival", time: "10:00 AM - 6:00 PM", desc: "Annual parish festival with food, games, and community activities." },
              { day: "20", month: "Sep", title: "Youth Day", time: "12:00 PM - 4:00 PM", desc: "Special mass and activities for our youth community." },
            ].map((event, i) => (
              <div key={i} className="flex bg-white rounded-lg overflow-hidden shadow-card hover:-translate-y-2 transition-smooth animate-on-scroll">
                <div className="bg-[#e98564d2] text-white p-6 text-center min-w-[120px] flex flex-col justify-center">
                  <span className="text-4xl font-bold block">{event.day}</span>
                  <span className="text-xl uppercase mt-1">{event.month}</span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-serif text-[#6b2f2f] mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-[#0b3b57] font-semibold mb-2">
                    <Clock className="h-4 w-4" /> {event.time}
                  </div>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-[#f3efe9] to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { src: "img/church-building.jpg", alt: "Church Building", caption: "Our Beautiful Church" },
              { src: "img/community-event.jpg", alt: "Community Event", caption: "Parish Community Gathering" },
              { src: "img/choir-performance.jpg", alt: "Choir Performance", caption: "Choir Ministry" },
              { src: "img/children-program.jpg", alt: "Children's Program", caption: "Children's Faith Formation" },
            ].map((image, i) => (
              <div 
                key={i} 
                className="h-[250px] rounded-lg overflow-hidden relative cursor-pointer shadow-card hover:shadow-elegant transition-smooth group animate-on-scroll"
                onClick={() => handleImageClick(image.src, image.alt)}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#6b2f2f]/80 to-transparent text-white p-5 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[whitesmoke]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-[#6b2f2f] section-underline">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-serif text-[#6b2f2f] mb-6 pb-4 border-b-2 border-[#b5892b]">Get in Touch</h3>
              <div className="space-y-5">
                <p className="flex items-center gap-4 text-lg">
                  <span className="w-6 text-[#0b3b57]">📍</span>
                  Holy Trinity Catholic Church, Aba-Panu Apata, Ibadan, Nigeria
                </p>
                <p className="flex items-center gap-4 text-lg">
                  <span className="w-6 text-[#0b3b57]">📞</span>
                  (123) 456-7890
                </p>
                <p className="flex items-center gap-4 text-lg">
                  <span className="w-6 text-[#0b3b57]">✉️</span>
                  holytrinityabapanu95@gmail.com
                </p>
              </div>

              <h3 className="text-2xl font-serif text-[#6b2f2f] mt-8 mb-6 pb-4 border-b-2 border-[#b5892b]">Office Hours</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#0b3b57]" />
                  Monday-Friday: 9:00 AM - 3:00 PM
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#0b3b57]" />
                  Saturday: 10:00 AM - 2:00 PM
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#0b3b57]" />
                  Sunday: Closed
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 rounded-full bg-[#dda8a8] text-white flex items-center justify-center hover:-translate-y-1 transition-smooth">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-serif text-[#6b2f2f] mb-6 pb-4 border-b-2 border-[#b5892b]">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-[#0b3b57]">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="border-gray-300 focus:border-[#0b3b57] focus:ring-[#0b3b57]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-[#0b3b57]">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="border-gray-300 focus:border-[#0b3b57] focus:ring-[#0b3b57]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-semibold text-[#0b3b57]">Subject</label>
                  <Select value={contactForm.subject} onValueChange={(value) => setContactForm(prev => ({ ...prev, subject: value }))}>
                    <SelectTrigger className="border-gray-300 focus:border-[#0b3b57] focus:ring-[#0b3b57]">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sacraments">Sacraments</SelectItem>
                      <SelectItem value="donations">Donations</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="other">Mass intenstion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold text-[#0b3b57]">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="border-gray-300 focus:border-[#0b3b57] focus:ring-[#0b3b57] resize-y min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#b5892b] hover:bg-[#0b3b57] text-white py-6">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0b3b57] to-[#6b2f2f] text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-[#b5892b] text-xl font-serif mb-5 pb-3 border-b border-white/20">Contact</h3>
              <p className="mb-4 opacity-90">📍 Holy Trinity Catholic Church, Aba-Panu Apata</p>
              <p className="mb-4 opacity-90">📞 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-[#b5892b] text-xl font-serif mb-5 pb-3 border-b border-white/20">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="opacity-90 hover:opacity-100 hover:text-[#b5892b] hover:pl-1 transition-all">Home</Link></li>
                <li><Link to="/outstation" className="opacity-90 hover:opacity-100 hover:text-[#b5892b] hover:pl-1 transition-all">Outstation</Link></li>
                <li><Link to="/register" className="opacity-90 hover:opacity-100 hover:text-[#b5892b] hover:pl-1 transition-all">Register</Link></li>
              </ul>
            </div>
            {/*<div>
              <h3 className="text-[#b5892b] text-xl font-serif mb-5 pb-3 border-b border-white/20">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-[#b5892b] hover:pl-1 transition-all flex items-center gap-2"></a>Homily</li>
                <li><a href="#" className="opacity-90 hover:opacity-100 hover:text-[#b5892b] hover:pl-1 transition-all flex items-center gap-2"></a>📄 Bulletin</li>
              </ul>
            </div>*/}
          </div>
          <div className="pt-6 border-t border-white/10 text-center opacity-80">
            <p>© 2025 Holy Trinity Catholic Church. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
      />

      <BackToTop />
    </div>
  );
}
