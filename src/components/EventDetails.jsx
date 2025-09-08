import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format, isAfter } from 'date-fns';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    githubAccount: '',
    linkedinId: '',
    portfolio: ''
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5002'}/api/events/${eventId}`);
        console.log('Event data:', response.data);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleImageError = () => {
    console.error('Image failed to load:', event?.image);
    setImageError(true);
  };

  const isEventUpcoming = (eventDate) => {
    return isAfter(new Date(eventDate), new Date());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegistering(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5002'}/api/registrations`,
        {
          ...formData,
          eventId
        }
      );

      if (response.data.success) {
        toast.success('Registration successful!');
        navigate('/event');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Error</h2>
          <p className="text-black">{error}</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Event Not Found</h2>
          <p className="text-black">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const isUpcoming = isEventUpcoming(event.date);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/event')}
          className="flex items-center gap-2 text-black hover:text-gray-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Events</span>
        </button>

        {/* Event Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="w-full h-96 relative bg-gray-100">
            {event.image && !imageError ? (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">No Image Available</p>
                  <p className="text-sm text-gray-400">Please update the event with a valid image URL</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-black mb-4">{event.title}</h1>
            
            {/* Event Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-black font-medium">Date</p>
                  <p className="font-semibold text-black">
                    {format(new Date(event.date), 'PPP')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-black font-medium">Time</p>
                  <p className="font-semibold text-black">{event.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-black font-medium">Location</p>
                  <p className="font-semibold text-black">{event.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-black font-medium">Available Seats</p>
                  <p className="font-semibold text-black">{event.availableSeats}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">About This Event</h2>
              <p className="text-black whitespace-pre-wrap">{event.description}</p>
            </div>

            {/* Detailed Description */}
            {event.detailedDescription && (
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">Detailed Information</h2>
                <p className="text-black whitespace-pre-wrap">{event.detailedDescription}</p>
              </div>
            )}

            {/* Registration Button and Form */}
            {isUpcoming && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto bg-black text-white hover:bg-gray-800 transition-colors">
                    Register for Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white max-w-md text-black mx-auto">
                  <DialogHeader>
                    <DialogTitle className="text-black">Register for {event.title}</DialogTitle>
                    <DialogDescription className="text-black">
                      Fill out the form below to register for this event.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your 10-digit phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="githubAccount">GitHub Profile (Optional)</Label>
                      <Input
                        id="githubAccount"
                        name="githubAccount"
                        value={formData.githubAccount}
                        onChange={handleInputChange}
                        placeholder="https://github.com/username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedinId">LinkedIn Profile</Label>
                      <Input
                        id="linkedinId"
                        name="linkedinId"
                        value={formData.linkedinId}
                        onChange={handleInputChange}
                        required
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio Website (Optional)</Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://your-portfolio.com"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800"
                      disabled={isRegistering}
                    >
                      {isRegistering ? 'Registering...' : 'Submit Registration'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;