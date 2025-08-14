import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { ENDPOINTS } from '../../config/api';

const sponsorshipPackages = [
  {
    name: "TITLE",
    price: "₹2,50,000",
    color: "#FF9B45",
    benefits: [
      "Exclusive title Sponsor Recognition",
      "Premium logo placement on all event materials",
      "Display Booth - Extra Large Booth",
      //"VIP booth space at prime location",
      "7 free event tickets",
      "Keynote Speaking Slot",
      "Featured in all Email Communications",
      "Logo on Tees & Stage",
      // "Access to attendee database",
      "Swags Distribution",
    ],
  },
  {
    name: "GOLD",
    price: "₹1,50,000",
    color: "#FFD700",
    benefits: [
      "Premium logo placement on Event Website",
      "Display Booth - Large Booth",
      "5 free event tickets",
      "20-minute Speaking Slot",
      "Email Promotion to attendees",
      "Logo on Tees & Stage (Standard)",
      "Swags Distribution",
    ],
  },
  {
    name: "SILVER",
    price: "₹1,00,000",
    color: "#C0C0C0",
    benefits: [
      "Logo placement on Event Website",
      "Display Booth - Small Booth",
      "5 free event tickets",
      "Lightning talk opportunity",
      // "Social media mentions (5 dedicated posts)",
      "Logo on digital event materials",
    ],
  },
  {
    name: "ASSOCIATE",
    price: "₹50,000",
    color: "#8D0B41",
    benefits: [
      "Logo placement on Event Website",
      "Small booth space at event",
      "3 free event tickets",
      "Logo on digital event materials",
    ],
  },
  {
    name: "IN KIND",
    price: "Custom",
    color: "#57B4BA",
    benefits: [
      "Logo placement on event website",
      "Event tickets - IN KIND",
      "Recognition in event materials",
      "Opportunity for product showcase",
      "Swags Distribution",
    ],
  },
];

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  jobTitle: z.string().optional(),
  package: z.string({ required_error: "Please select a package" }),
  message: z.string().optional(),
  additionalOptions: z.array(z.string()).optional(),
});

function SponsorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      jobTitle: "",
      message: "",
      additionalOptions: [],
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Show loading toast
      toast.promise(
        fetch(`${ENDPOINTS.SPONSORS}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then(async (response) => {
          const result = await response.json();
          
          if (!response.ok) {
            // Handle validation errors
            if (response.status === 400 && result.errors) {
              const errorMessages = result.errors.map(error => error.message).join('\n');
              throw new Error(errorMessages);
            }
            throw new Error(result.message || 'Failed to submit sponsorship request');
          }
          
          return result;
        }),
        {
          loading: 'Submitting your sponsorship request...',
          success: (result) => {
            // Reset form after successful submission
            form.reset();
            return (
              <div className="mt-2">
                <p>Thank you for your interest in sponsoring our event!</p>
                <p className="mt-1">We will review your submission and contact you at {data.email} soon.</p>
              </div>
            );
          },
          error: (error) => {
            return (
              <div className="mt-2">
                <p>{error.message || "Please try again later."}</p>
                <p className="mt-1 text-sm">If the problem persists, please contact our support team.</p>
              </div>
            );
          },
        }
      );
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Submission Failed", {
        description: (
          <div className="mt-2">
            <p>{error.message || "Please try again later."}</p>
            <p className="mt-1 text-sm">If the problem persists, please contact our support team.</p>
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-400 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SPONSORSHIP OPPORTUNITIES
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Support our community and gain visibility for your brand within
            Pune's tech ecosystem.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Sponsorship Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed sponsorship tiers to find the
              perfect fit for your organization.
            </p>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-6">
              {sponsorshipPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className="w-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader
                    style={{ backgroundColor: pkg.color }}
                    className="text-white p-4 md:p-6"
                  >
                    <CardTitle className="text-xl md:text-2xl">{pkg.name} SPONSOR</CardTitle>
                    <div className="text-2xl md:text-3xl font-bold mt-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 text-black">
                    <h4 className="font-semibold mb-4">Benefits:</h4>
                    <ul className="space-y-2">
                      {pkg.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button
                      asChild
                      style={{ backgroundColor: pkg.color }}
                      className="w-full text-base md:text-lg py-3 md:py-4 px-6 md:px-8 font-semibold text-black hover:opacity-90"
                    >
                      <a href="#sponsorship-form">
                        Select
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex flex-nowrap gap-4 overflow-x-auto pb-6 px-4 snap-x snap-mandatory">
              {sponsorshipPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className="flex-none w-72 hover:shadow-lg transition-shadow snap-center"
                >
                  <CardHeader
                    style={{ backgroundColor: pkg.color }}
                    className="text-white p-6"
                  >
                    <CardTitle className="text-2xl">{pkg.name} SPONSOR</CardTitle>
                    <div className="text-3xl font-bold mt-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="p-6 text-black h-[400px] overflow-y-auto">
                    <h4 className="font-semibold mb-4">Benefits:</h4>
                    <ul className="space-y-2">
                      {pkg.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      style={{ backgroundColor: pkg.color }}
                      className="w-full text-lg py-4 px-8 font-semibold text-black hover:opacity-90"
                    >
                      <a href="#sponsorship-form" style={{color: 'black'}}>
                        Select
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Form Section */}
      <section className="py-16 bg-gray-100" id="sponsorship-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-black">
                Become a Sponsor
              </h2>
              <p className="text-gray-600">
                Fill out the form below to start your sponsorship journey with
                our community.
              </p>
            </div>

            <Card className="border-0.2 border-black">
              <CardContent className="p-2 text-black">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="mt-4">
                          <FormLabel className="text-black text-base">
                            Full Name*
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="placeholder:text-gray-400 mt-2"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black text-base">
                            Email Address*
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black text-base">
                              Company Name*
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Acme Inc."
                                {...field}
                                className="placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black text-base">
                              Phone Number*
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+91 98765 43210"
                                {...field}
                                className="placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black text-base">
                            Job Title
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Marketing Director"
                              {...field}
                              className="placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="package"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black text-base">
                            Sponsorship Package*
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a package" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-black bg-white border-none w-full">
                              {sponsorshipPackages.map((pkg) => (
                                <SelectItem key={pkg.name} value={pkg.name} className="w-full p-0">
                                  <div className="flex justify-between items-center w-full px-3 py-2">
                                    <span  className="truncate">{pkg.name}</span>
                                    <span className="text-orange-500 font-semibold">
                                      {pkg.price}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black text-base">
                            Additional Information
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements or questions..."
                              className="min-h-[120px] placeholder:text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Sponsorship Request"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Sponsor Our Events?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partnering with Pune Community Hub offers unique benefits for your
              organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mt-5">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Reach Qualified Audience
                </h3>
                <p className="text-gray-600">
                  Connect with over 2,500 tech professionals, developers, and
                  decision-makers in the Pune region.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mt-5">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Brand Visibility</h3>
                <p className="text-gray-600">
                  Showcase your brand to a engaged audience both at physical
                  events and through our digital channels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mt-5">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Talent Acquisition</h3>
                <p className="text-gray-600">
                  Connect with skilled professionals and position your company
                  as an employer of choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponsorForm;
