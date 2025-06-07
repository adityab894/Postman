import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { emailAPI } from '../config/api';

function Email() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const data = {
        userName: formData.get("user_name"),
        userEmail: formData.get("user_email"),
        userInterest: formData.get("user_interest"),
      };

      const response = await emailAPI.submitEmail(data);
      
      if (response.status === "success") {
        form.current.reset();
        toast.success("Thank you for your interest! We will contact you soon.");
      } else {
        throw new Error(response.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission Failed", {
        description: error.response?.data?.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800 p-6 rounded-2xl">
      <div>
        <h2 className="text-md p-2">Stay Connected</h2>
        <form
          className="flex flex-col text-gray-700"
          onSubmit={sendEmail}
          ref={form}
        >
          <p className="py-2">Your Name</p>
          <input
            type="text"
            name="user_name"
            placeholder="John Doe"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            required
          />
          <label className="py-2">Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="john@example.com"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            required
          />
          <label className="py-2">Your Interest</label>
          <select
            name="user_interest"
            className="border border-gray-300 bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Volunteer">Volunteer</option>
            <option value="Management">Management</option>
            <option value="Social Media">Social Media</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Design">Design</option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-orange-700 to-orange-400 text-white justify-center rounded-lg px-4 py-2 mt-4 mx-auto block disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Join Our Team"}
          </button>
        </form>
      </div>

      {!isSubmitting && (
        <p className="text-lg text-red-500 mt-4">
          Kindly click the submit button once—your request may take a few
          seconds to process.
        </p>
      )}
    </div>
  );
}

export default Email;
