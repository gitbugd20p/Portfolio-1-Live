import { useState, useEffect } from "react";
import contactStore from "../store/contactStore";
import { toast } from "react-toastify";
import { motion } from "motion/react";

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

  const inputClasses =
    "w-full border-b-2 border-gray-400 px-4 py-3 focus:border-purple-500 focus:outline-none";

  return (
    <div className="w-full">
      <h3 className="mb-6 text-xl font-semibold text-white">
        Sent a Email/Message
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        {/* Email */}
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        {/* Location */}
        <input
          type="text"
          id="location"
          placeholder="City, Country"
          value={formData.location}
          onChange={handleChange}
          className={inputClasses}
        />

        {/* Budget */}
        <input
          type="text"
          id="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClasses}
        />

        {/* Subject */}
        <input
          type="text"
          id="subject"
          placeholder="Project Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        {/* Message */}
        <textarea
          id="message"
          rows="2"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={inputClasses}
        />

        {/* Error */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Success */}
        {success && (
          <p className="text-sm text-green-600">Message sent successfully!</p>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg py-3 font-semibold text-white shadow-md transition-all duration-300 ${
            loading ? "cursor-not-allowed bg-gray-400" : "btn-grad"
          }`}
        >
          {loading ? "SENDING..." : "SEND MESSAGE"}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
