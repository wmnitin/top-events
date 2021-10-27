import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventDetails from "./Components/EventsDetails";
import EventsListing from "./Components/EventsListing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:eventId/:sportType/:category/:remainSlug">
          <EventDetails />
        </Route>
        <Route path="/">
          <EventsListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
