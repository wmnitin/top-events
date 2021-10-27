import { useEffect, useState } from "react";
import { getEventsDatabyId, getPopularEvents } from "../../Config/api";
import EventList from "./EventList";

const EventsListing = () => {
  const [popularEvents, changePopularEvents] = useState(null);

  useEffect(() => {
    getPopularEvents().then(({ data }) => {
      const popular_event_ids = data.popular_event_ids;
      if (popular_event_ids.length) {
        getEventsDatabyId(popular_event_ids.toString()).then(({ data }) => {
          data.events.sort(
            (a, b) =>
              Date.parse(a.start_datetime) - Date.parse(b.start_datetime)
          );
          changePopularEvents(data.events || []);
        });
      } else {
        changePopularEvents([]);
      }
    });
  }, []);

  if (!popularEvents) {
    return null;
  }

  return (
    <div className="container">
      <h1 className="mt-3">Popular Events</h1>
      <div className="borderT pt-3">
        <p>Please select events to view detail or Bet !</p>
        <div className="eventContainer mt-3">
          {popularEvents.length ? (
            popularEvents.map((event, idx) => {
              return <EventList key={idx} event={event} />;
            })
          ) : (
            <div>No events found ! </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsListing;
