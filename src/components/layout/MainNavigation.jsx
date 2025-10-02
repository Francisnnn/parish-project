import React from "react";
import Link from "next/link";

const MainNavigation = () => {
  const navItems = [
    { href: "/", icon: "fas fa-home", text: "Home" },
    { href: "/parish", icon: "fas fa-church", text: "Parish" },
    {
      href: "/outstation",
      icon: "fas fa-place-of-worship",
      text: "Outstation",
    },
    { href: "/register", icon: "fas fa-user-plus", text: "Register" },
    { href: "/admin", icon: "fas fa-lock", text: "Admin" },
    { href: "#donate", icon: "fas fa-donate", text: "Donate" },
    { href: "#contact", icon: "fas fa-envelope", text: "Contacts" },
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

export default MainNavigation;
