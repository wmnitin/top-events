import { useHistory } from "react-router-dom";
import { getDateTime, getSportData, getStatus } from "../../helpers";
import StatusBadge from "../Shared/StatusBadge";

const Listing = ({ event }) => {
  const history = useHistory();
  const moveToEventPage = () => {
    history.push("/" + event.id + event.full_slug, {
      event,
    });
  };
  const sportsData = getSportData(event.type);
  const datetime = getDateTime(event.start_datetime);
  return (
    <div className="eventList" onClick={() => moveToEventPage()}>
      <p>
        <StatusBadge sportsData={sportsData} />
        <span>
          {event.state === "live" ? " Started " : " Starting "} on{" "}
          <span className={datetime.today ? "fw-bold" : ""}>
            {(!datetime.today ? datetime.date + ", " : "") + datetime.time}
          </span>
        </span>
      </p>
      <h6>
        {event.name} <span className="stat">{getStatus(event.state)}</span>
      </h6>
    </div>
  );
};

export default Listing;
