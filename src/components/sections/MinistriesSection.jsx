export default function MinistriesSection() {
  const ministries = [
    {
      icon: "fas fa-music",
      title: "Choir Ministry",
      description:
        "Our choir enhances liturgical celebrations with beautiful sacred music.",
      details: [
        { icon: "fas fa-clock", text: "Rehearsals: Saturdays at 5:00 PM" },
        {
          icon: "fas fa-user",
          text: "Contact Choir Ma: Mr. Festus Abibu - 09063410785",
        },
        {
          icon: "fas fa-user",
          text: "Contact Choir Ma: Mr. Godwin - 08032123304",
        },
      ],
      buttonText: "Join Us",
    },
    {
      icon: "fas fa-hands",
      title: "St. Vincent the Poor",
      description:
        "We serve the needy in our community through various outreach programs.",
      details: [
        { icon: "fas fa-clock", text: "Meetings: 2nd Saturday at 10:00 AM" },
        { icon: "fas fa-user", text: "Contact: Mr. Chukwu - 0805 123 4567" },
      ],
      buttonText: "Volunteer",
    },
    {
      icon: "fas fa-book",
      title: "Bible Study",
      description:
        "Deepen your understanding of Scripture through our weekly study groups.",
      details: [
        { icon: "fas fa-clock", text: "Wednesdays at 6:00 PM" },
        { icon: "fas fa-user", text: "Contact: Dr. Okoro - 0802 987 6543" },
      ],
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="section ministries" id="ministries">
      <div className="container">
        <h2 className="section-title">Parish Ministries</h2>
        <div className="ministry-grid">
          {ministries.map((ministry, index) => (
            <div key={index} className="ministry-card">
              <div className="ministry-header">
                <i className={ministry.icon}></i>
                <h3>{ministry.title}</h3>
              </div>
              <div className="ministry-body">
                <p>{ministry.description}</p>
                <ul>
                  {ministry.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <i className={detail.icon}></i> {detail.text}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn">
                  {ministry.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
