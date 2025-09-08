import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ENDPOINTS } from '../config/api'; 

const SubscribeForm = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${ENDPOINTS.SUBSCRIBE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed. Please try again.');
      }

      toast.success("You've been subscribed successfully!", {
        description: "Check your inbox for our newsletter.",
      });

      setEmail('');
      setTimeout(() => setOpen(false), 2000);
    } catch (error) {
      toast.error("Subscription failed", {
        description: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-[95vw] sm:w-full relative mx-2" style={{ backgroundColor: '#3097B8' }}>
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 text-white hover:text-gray-300 text-xl font-bold bg-transparent"
          aria-label="Close popup"
          style={{
            border: 'none',
            focus: 'none',
            outline: 'none',
          }}
        >
          &times;
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Join our newsletter to receive the latest updates and promotions.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-0"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border px-4 py-2 focus:outline-none w-full sm:w-2/3 rounded sm:rounded-none sm:rounded-l"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="bg-white text-black font-bold py-2 hover:bg-gray-300 transition w-full sm:w-1/3 rounded sm:rounded-none sm:rounded-r"
            disabled={isSubmitting}
            style={{
              border: 'none',
              focus: 'none',
            }}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
