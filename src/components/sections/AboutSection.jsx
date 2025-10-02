export default function AboutSection() {
  const cards = [
    {
      title: "Our History",
      content:
        "Holy Trinity Catholic Church was established in 1995 to serve the growing Catholic community in Aba-Panu Apata and surrounding areas. We began with just 35 families and have grown to over 150 families today.",
      buttonText: "Read More",
    },
    {
      title: "Our Mission",
      content:
        "To be a vibrant Catholic community that worships together, grows in faith, and serves others following the example of Jesus Christ.",
      buttonText: "Learn More",
    },
    {
      title: "Pastoral Team",
      content:
        "Meet our dedicated pastoral team who serve our community with love and commitment.",
      buttonText: "Meet the Team",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Our Parish</h2>
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3>{card.title}</h3>
              </div>
              <div className="card-body">
                <p>{card.content}</p>
                <a href="#" className="btn">
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
