import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, TicketMinus, MapPin } from "lucide-react";
import { eventAPI } from "../config/api";
import { toast } from "sonner";
import memory from "../assets/event/memory.jpg";
import memory1 from "../assets/event/memory1.jpg";
import ghibli from "../assets/event/ghibli.jpg";
import APIComm from "../assets/event/2.png";
import G from "../assets/event/G.png";
import gummie from "../assets/event/gummie.png";

function Event() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventAPI.getAllEvents();
        // Sort events by date in descending order (newest first)
        const sortedEvents = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setEvents(sortedEvents);
        setError(null);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        toast.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-black font-bold mb-4">Oops!</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen min-h-screen bg-white overflow-hidden mt-10">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-8 sm:mb-12 uppercase border-b-2 border-black pb-2 sm:pb-4">
          EVENTS
        </h2>

        {/* Image Gallery */}
          <div className="bg-gray-50 text-black flex flex-col justify-center items-center gap-2 w-full">
            <div className="flex flex-col sm:flex-row gap-2 w-full"> 
              <div className="w-full sm:w-1/2">
                <img src={memory} alt="Memory" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/2">
                <img src={ghibli} alt="Ghibli" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="w-full sm:w-1/3">
                <img src={G} alt="Postman Ghibli" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/3">
                <img src={APIComm} alt="G" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
              <div className="w-full sm:w-1/3">
                <img src={gummie} alt="Gummie" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
              </div>
            </div>
            <img src={memory1} alt="Memory" className="w-full h-32 sm:h-40 rounded-lg object-cover" />
          </div>

        {/* Events List */}
        <div className="flex flex-col items-center justify-center w-full">
          {events.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-black">No events available at the moment.</p>
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event._id}
                className="bg-white text-black flex flex-col sm:flex-row justify-center items-center rounded-2xl mt-4 shadow-lg gap-2 m-2 w-full"
              >
                <div className="text-black flex flex-col justify-center items-center p-4 sm:p-6 rounded-2xl w-full sm:w-auto mx-2" style={{backgroundColor: '#3097B8'}}>
                  <h4 className="text-sm sm:text-base font-medium">
                    {new Date(event.date).getFullYear()}
                  </h4>
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    {new Date(event.date).getDate()}
                  </h1>
                  <h4 className="text-sm sm:text-base font-medium">
                    {new Date(event.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </h4>
                </div>
                <div className="h-auto sm:h-40 text-black flex flex-col justify-center items-start p-4 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-600 w-full">
                  <div className="font-bold text-sm sm:text-base mb-2">
                    {event.title}
                  </div>
                  <div className="text-xs sm:text-sm text-black">
                    {event.description}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center p-4 sm:p-6 gap-4 sm:gap-6 w-full">
                  <div className="flex flex-col justify-center items-start sm:items-center px-4 sm:px-6 gap-2 w-full">
                    <div className="flex flex-col items-start justify-center gap-4">
                      <div className="flex flex-row gap-2 items-center w-full sm:w-auto">
                        <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                        <h2 className="text-xs sm:text-sm text-black">
                          {event.time}
                        </h2>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full sm:w-auto">
                        <TicketMinus className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                        <h2 className="text-xs sm:text-sm text-black">
                          {event.availableSeats} seats available
                        </h2>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full sm:w-auto">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                        <h2 className="text-xs sm:text-sm text-black">
                          {event.location}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-4 sm:px-6 gap-2 w-full">
                    <button
                      onClick={() => navigate(`/event/${event._id}`)}
                      className="w-full bg-black text-white text-xs sm:text-sm py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Event;
