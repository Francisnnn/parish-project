import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { href: "/", icon: "fas fa-home", text: "Home" },
    { href: "/#about", icon: "fas fa-info-circle", text: "About Us" },
    { href: "/#mass-times", icon: "fas fa-clock", text: "Mass Times" },
    { href: "/#ministries", icon: "fas fa-hands-helping", text: "Ministries" },
    { href: "/#events", icon: "fas fa-calendar-alt", text: "Events" },
  ];

  const resources = [
    { href: "/homily", icon: "fas fa-file-alt", text: "Homily" },
    { href: "#", icon: "fas fa-file-alt", text: "Bulletin" },
    { href: "#", icon: "fas fa-donate", text: "Donations" },
    { href: "#", icon: "fas fa-pray", text: "Prayer Requests" },
    { href: "#", icon: "fas fa-hands-helping", text: "Volunteer" },
    { href: "/outstation", icon: "fas fa-church", text: "St. John Outstation" },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Holy Trinity Catholic Church</h3>
            <p>Aba-Panu, Apata, Ibadan, Nigeria</p>
            <p>Archdiocese of Ibadan</p>
            <p>Serving the community since 1995</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <i className={link.icon}></i> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href}>
                    <i className={resource.icon}></i> {resource.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Holy Trinity Catholic Church,
            Aba-Panu, Apata, Ibadan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
