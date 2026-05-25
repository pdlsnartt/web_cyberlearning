type EventLogProps = {
  events: string[];
};

export function EventLog({ events }: EventLogProps) {
  return (
    <section className="eventLog">
      <h2>Event Log</h2>
      <div>
        {events.map((event, index) => (
          <p key={`${event}-${index}`}>{event}</p>
        ))}
      </div>
    </section>
  );
}
