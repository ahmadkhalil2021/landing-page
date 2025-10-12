import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_sdi01a7";
      const templateId = "template_9qri3hm";
      const userId = "p7RbMzF3Oe1uLxFd1";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          service_type: formData.service,
          message: formData.message,
        },
        userId
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-center"
          data-aos="fade-up"
        >
          Contact Us
        </h2>
        <p className="mb-8 text-center max-w-2xl mx-auto">
          Ready to make your space sparkle? Let's talk! Fill out the form below
          and we'll get back to you within 24 hours.
        </p>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            Failed to send message. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select a Service</option>
                  <option value="home">Home Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="move">Move In/Out</option>
                  <option value="Carpet">Carpet Cleaning</option>
                  <option value="Window">Window Cleaning</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors shadow-md ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <a target="_blank" href="https://sparkleclean-appointment.askpicloud.de/" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-31 rounded-lg transition-colors shadow-md">
                  Reserve an Appointment
              </a>
            </form>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-700">123 Clean Street, Sparkle City</p>
              <p className="text-gray-700">Email: info@sparkleclean.com</p>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-700">Saturday: 9am - 4pm</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
              <p className="text-gray-700">
                Available 24/7 for urgent cleaning needs
              </p>
              <p className="text-blue-600 font-medium">Call: (123) 555-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
