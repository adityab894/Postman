import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, TicketMinus, MapPin } from "lucide-react";
import { eventAPI } from "../config/api";
import { toast } from "sonner";
import memory from "../assets/event/memory.jpg";
import ghibli from "../assets/event/ghibli.jpg";
import postmanGhibli from "../assets/event/postmanGhibli.jpg";
import G from "../assets/event/G.png";
import gummie from "../assets/event/gummie.jpg";

function Event() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventAPI.getAllEvents();
        // Ensure data is an array before sorting
        if (Array.isArray(data)) {
          // Sort events by date in descending order (newest first)
          const sortedEvents = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setEvents(sortedEvents);
        } else {
          console.error('Received non-array data:', data);
          setEvents([]);
        }
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {event.image && (
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400?text=No+Image+Available';
                  }}
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <TicketMinus className="w-4 h-4 mr-2" />
                  <span>{event.availableSeats} seats available</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/event/${event._id}`)}
                className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
