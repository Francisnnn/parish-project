import Image from "next/image";

export default function LeadershipSection() {
  const leaders = [
    {
      image: "/img/pope leo xiv.jpeg",
      title: "His Holiness",
      name: "Pope Leo XIV",
      role: "",
    },
    {
      image: "/img/bishop.jpg",
      title: "His Grace",
      name: "Most Rev. Dr. Gabriel Leke Abegunrin",
      role: "Archbishop of Ibadan",
    },
    {
      image: "/img/Steve.jpg",
      title: "",
      name: "Rev. Fr Stephen Udechukwu",
      role: "Parish Priest",
    },
  ];

  return (
    <section className="section leadership">
      <div className="container">
        <h2 className="section-title">Our Spiritual Leaders</h2>
        <div className="leader-cards">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <div className="leader-img">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={200}
                  height={200}
                />
              </div>
              {leader.title && (
                <small>
                  <p>{leader.title}</p>
                </small>
              )}
              <h3>{leader.name}</h3>
              {leader.role && <p>{leader.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
