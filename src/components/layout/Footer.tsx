import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">Parish Office Address</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">+234 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">info@holytrinityparish.org</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-primary transition-smooth">About Us</a></li>
            <li><a href="#mass-times" className="hover:text-primary transition-smooth">Mass Times</a></li>
            <li><a href="#ministries" className="hover:text-primary transition-smooth">Ministries</a></li>
            <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-smooth">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm mt-4 opacity-75">
            © { new Date().getFullYear() } Holy Trinity Catholic Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
