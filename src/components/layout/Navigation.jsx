import React from "react";
import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { href: "/", icon: "fas fa-home", text: "Home" },
    { href: "/#about", icon: "fas fa-info-circle", text: "About" },
    { href: "/#mass-times", icon: "fas fa-clock", text: "Mass Time" },
    { href: "/#sacraments", icon: "fas fa-church", text: "Sacraments" },
    { href: "/#ministries", icon: "fas fa-hands-helping", text: "Ministries" },
    { href: "/#events", icon: "fas fa-calendar-alt", text: "Events" },
    { href: "/gallery", icon: "fas fa-images", text: "Gallery" },
    { href: "/contact", icon: "fas fa-envelope", text: "Contact" },
  ];

  return (
    <nav>
      <div className="container nav-container">
        <ul className="nav-menu" id="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <i className={item.icon}></i> {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
