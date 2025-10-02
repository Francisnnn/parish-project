export default function EventsSection() {
  const events = [
    {
      date: { day: "15", month: "Aug" },
      title: "Feast of the Assumption",
      time: "All Day Event",
      description: "Holy Day of Obligation. Special masses throughout the day.",
    },
    {
      date: { day: "10", month: "Sep" },
      title: "Parish Festival",
      time: "10:00 AM - 6:00 PM",
      description:
        "Annual parish festival with food, games, and community activities.",
    },
    {
      date: { day: "20", month: "Sep" },
      title: "Youth Day",
      time: "12:00 PM - 4:00 PM",
      description: "Special mass and activities for our youth community.",
    },
  ];

  return (
    <section className="section events" id="events">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-calendar">
          {events.map((event, index) => (
            <div key={index} className="event">
              <div className="event-date">
                <span className="event-day">{event.date.day}</span>
                <span className="event-month">{event.date.month}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <div className="event-time">
                  <i className="fas fa-clock"></i> {event.time}
                </div>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
