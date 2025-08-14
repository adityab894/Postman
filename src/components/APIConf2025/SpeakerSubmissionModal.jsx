import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import api from '../../config/api';

const SpeakerSubmissionModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    talkTitle: "",
    talkType: "",
    talkDescription: "",
    previousSpeakingExperience: false,
    termsAccepted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${api.ENDPOINTS.SPEAKERS}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (response.status === 400 && data.errors) {
          const errorMessages = data.errors.map(error => error.message).join('\n');
          throw new Error(errorMessages);
        }
        throw new Error(data.message || 'Failed to submit proposal');
      }

      // Success toast
      toast.success("Your talk proposal has been submitted successfully!", {
        description: "We'll review your submission and contact you via email soon.",
      });

      // Reset form and close modal
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        talkTitle: "",
        talkType: "",
        talkDescription: "",
        previousSpeakingExperience: false,
        termsAccepted: false,
      });
      onClose();
    } catch (error) {
      // Error toast
      toast.error("Failed to submit proposal", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black sm:max-w-[600px] max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center tracking-wide text-black">
            SUBMIT YOUR TALK PROPOSAL
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Share your expertise with the Postman community. Fill out the form
            below to submit your talk for consideration.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              name="organization"
              placeholder="Company or organization"
              value={formData.organization}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  organization: e.target.value,
                }))
              }
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="talkTitle">Talk Title</Label>
            <Input
              id="talkTitle"
              name="talkTitle"
              placeholder="Title of your proposed talk"
              value={formData.talkTitle}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, talkTitle: e.target.value }))
              }
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="talkType">Talk Type</Label>
            <Select
              value={formData.talkType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, talkType: value }))
              }
              required
              disabled={isSubmitting}
            >
              <SelectTrigger className="w-full bg-white border border-gray-300 text-black">
                <SelectValue placeholder="Select talk format" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300">
                <SelectItem
                  value="technical"
                  className="text-black hover:bg-gray-100 cursor-pointer"
                >
                  Technical Session
                </SelectItem>
                <SelectItem
                  value="casestudy"
                  className="text-black hover:bg-gray-100 cursor-pointer"
                >
                  Case Study
                </SelectItem>
                <SelectItem
                  value="workshop"
                  className="text-black hover:bg-gray-100 cursor-pointer"
                >
                  Workshop
                </SelectItem>
                <SelectItem
                  value="lightning"
                  className="text-black hover:bg-gray-100 cursor-pointer"
                >
                  Lightning Talk
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500">
              Select the format that best suits your topic
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="talkDescription">Talk Description</Label>
            <Textarea
              id="talkDescription"
              name="talkDescription"
              placeholder="Describe your talk, target audience, and key takeaways"
              value={formData.talkDescription}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  talkDescription: e.target.value,
                }))
              }
              className="min-h-[120px]"
              required
              minLength={50}
              disabled={isSubmitting}
            />
            <p className="text-sm text-muted-foreground">
              Please provide a detailed description (at least 50 characters)
            </p>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="previousSpeakingExperience"
              checked={formData.previousSpeakingExperience}
              onChange={handleChange}
              className="mt-1 mr-2"
              disabled={isSubmitting}
            />
            <label className="text-sm text-gray-700">
              Previous Speaking Experience
              <p className="text-sm text-gray-500">
                Check this box if you've presented at conferences before
              </p>
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
              disabled={isSubmitting}
            />
            <label className="text-sm text-gray-700">
              Terms and Conditions
              <p className="text-sm text-gray-500">
                I agree that my talk may be recorded and shared, and I consent to having my information stored for the purposes of this event.
              </p>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-700 to-orange-500 hover:from-orange-800 hover:to-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Proposal'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakerSubmissionModal;
