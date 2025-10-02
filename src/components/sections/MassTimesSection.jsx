export default function MassTimesSection() {
  const massSchedule = [
    {
      day: "Weekdays",
      times: [{ time: "Monday 5:45 AM" }, { time: "Tuesday & Thursday 6AM" }],
    },
    {
      day: "Saturdays",
      times: [
        { time: "Morning Mass: 7:00 AM", icon: "fas fa-clock" },
        { time: "Confessions: 8:00 AM", icon: "fas fa-pray" },
      ],
    },
    {
      day: "Sundays",
      times: [{ time: "8:00 AM (English)", icon: "fas fa-clock" }],
    },
  ];

  return (
    <section className="section mass-time" id="mass-time">
      <div className="container">
        <h2 className="section-title">Mass Time & Schedule</h2>
        <div className="mass-schedule">
          {massSchedule.map((schedule, index) => (
            <div key={index} className="mass-day">
              <h3>{schedule.day}</h3>
              {schedule.times.map((time, timeIndex) => (
                <p key={timeIndex}>
                  {time.icon && <i className={time.icon}></i>} {time.time}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
