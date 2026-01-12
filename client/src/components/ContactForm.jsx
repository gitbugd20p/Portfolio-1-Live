import { useState, useEffect } from "react";
import contactStore from "../store/contactStore";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { sendEmail, loading, error, success, resetStatus } = contactStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData);
    toast.success("Email sent successfully!");
  };

  // Reset form on success
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: "",
      });
      resetStatus();
    }, 2000);

    return () => clearTimeout(timer);
  }, [success, resetStatus]);

  return (
    <div className="w-full max-w-lg rounded-xl bg-white">
      <p className="mb-6 text-xl font-semibold text-gray-400">
        I'm always open to discussing product design work or partnership
        opportunities.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Email */}
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Location */}
        <input
          type="text"
          id="location"
          placeholder="City, Country"
          value={formData.location}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Budget */}
        <input
          type="text"
          id="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Subject */}
        <input
          type="text"
          id="subject"
          placeholder="Project Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Message */}
        <textarea
          id="message"
          rows="2"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none"
        />

        {/* Error */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Success */}
        {success && (
          <p className="text-sm text-green-600">Message sent successfully!</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg py-3 font-semibold text-white shadow-md transition-all duration-300 ${
            loading
              ? "cursor-not-allowed bg-gray-400"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
