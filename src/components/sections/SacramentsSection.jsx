export default function SacramentsSection() {
  const sacraments = [
    {
      title: "Baptism",
      description:
        "Baptisms are held on the first and third Sundays of each month. Preparation classes are required for parents and godparents.",
      buttonText: "Schedule Baptism",
    },
    {
      title: "First Communion",
      description:
        "Children typically receive First Communion after two years of religious education. Classes begin in September.",
      buttonText: "Register",
    },
    {
      title: "Confirmation",
      description:
        "Confirmation preparation is a two-year program for youth. Adults seeking confirmation should contact the office.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="section" id="sacraments">
      <div className="container">
        <h2 className="section-title">Sacraments</h2>
        <div className="card-container">
          {sacraments.map((sacrament, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3>{sacrament.title}</h3>
              </div>
              <div className="card-body">
                <p>{sacrament.description}</p>
                <a href="#" className="btn">
                  {sacrament.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
