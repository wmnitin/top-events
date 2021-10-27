import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { getEventsDatabyId } from "../../Config/api";
import { getDateTime, getSportData, getStatus } from "../../helpers";
import StatusBadge from "../Shared/StatusBadge";

const EventsDetails = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const [event, setEvent] = useState({});
  useEffect(() => {
    if (history?.location?.state?.event) {
      // This is to avoid api hit, passing data from listing route
      setEvent(history?.location?.state?.event);
    } else {
      // Hit api
      getEventsDatabyId(match.params.eventId).then(({ data }) => {
        setEvent(data.events?.[0]); // can be undefined
      });
    }
  }, []);

  if (!event) {
    <div className="container">Event not found !</div>;
  }

  const { date, time } = getDateTime(event.start_datetime);
  const sportsData = getSportData(event.type);

  return (
    <div className="container mt-3">
      <h1>
        <span onClick={() => window.history.back()} className="backBtn pe-2">
          ⬅
        </span>
        {event.name}
      </h1>
      <div className="eventDetailContainer borderT pt-3">
        <h3 className="text-capitalize">
          {getStatus(event.state)}
          {event.short_name ? ", " + event.short_name : ""}
        </h3>
        <p>{date + ", " + time}</p>
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">
              Event Type
              <span className="stat">
                <StatusBadge sportsData={sportsData} />
              </span>
            </li>
            <li className="list-group-item">
              Currently available for Betting{" "}
              <span className="stat">{event.bettable ? "✅" : "❎"}</span>
            </li>
            <li className="list-group-item">
              Betting Allowed{" "}
              <span className="stat">{event.bet_allowed ? "✅" : "❎"}</span>
            </li>
            <li className="list-group-item">
              End Date <span className="stat">{event.end_date ?? "NA"}</span>
            </li>
          </ul>
        </div>
        <p className="infoText">
          Please don't mind if you can't see api request in the network tab on
          page refresh, I passed the data from history api to avoid api hit, we
          can always use redux or context to pass data to this route. If you
          still want to see api hit, please copy paste the url in different tab.
        </p>
      </div>
    </div>
  );
};

export default EventsDetails;
