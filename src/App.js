import { useState, useEffect } from "react";
import Map from "./components/map";
import LoadingSpinner from "./components/loading-spinner";
import "./App.css";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []);

  return (
    <div>{loading ? <LoadingSpinner /> : <Map eventData={eventData} />}</div>
  );
}

export default App;
