import React from "react";
import Link from "next/link";

const AnnouncementsSection = () => {
  const announcements = [
    {
      title: "Weekly Mass Schedule",
      content:
        "View our updated mass schedule for both Holy Trinity Parish and St. John Outstation.",
      link: "/mass-times",
    },
    {
      title: "Online Registration",
      content:
        "Register as a member of our parish community. Fill out our online form.",
      link: "/register",
    },
    {
      title: "Donate Online",
      content:
        "Support our parish activities and maintenance. Make a secure online donation.",
      link: "/donate",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Announcements</h2>
        <div className="card-container">
          {announcements.map((announcement, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3>{announcement.title}</h3>
                <p>{announcement.content}</p>
                <Link href={announcement.link} className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
