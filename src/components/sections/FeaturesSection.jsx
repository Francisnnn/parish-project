export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-church",
      title: "Spiritual Growth",
      description:
        "Deepen your faith through our liturgical celebrations and spiritual programs.",
    },
    {
      icon: "fas fa-users",
      title: "Community",
      description:
        "Join a welcoming community that supports each other in faith and daily life.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Service Opportunities",
      description:
        "Serve others through our various ministries and outreach programs.",
    },
    {
      icon: "fas fa-book",
      title: "Faith Formation",
      description:
        "Grow in knowledge and understanding of the Catholic faith through our programs.",
    },
  ];

  return (
    <section className="section features">
      <div className="container">
        <h2 className="section-title">Why Join Our Parish</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
