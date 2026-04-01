import "../assets/styles/Contact.css";
import SectionTopHeader from "./SectionTopHeader";
import ContactSmallCards from "./ContactSmallCards";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const Contact = () => {
  const addressData = [
    {
      icon: FaLocationDot,
      title: "Location",
      description: "Dhaka, Bangladesh",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "mdsabur1010@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      description: "Available upon request",
    },
  ];

  return (
    <section id="contact" className="skills-grad scroll-mt-16 lg:p-24">
      {/* Contact Section */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect flex flex-col overflow-hidden rounded-4xl border border-white/5 shadow-2xl md:flex-row"
        >
          {/* Left Side contact information */}
          <div className="w-full border-b border-white/5 p-10 md:w-1/2 md:border-r md:border-b-0 lg:p-16">
            <SectionTopHeader
              sectionTopClassName="text-start pb-10"
              header="Let’s Build the Future Together"
              paraOne="I am actively seeking an Junior Full-Stack role or Internship. I’m ready to apply my MERN expertise and passion for scalable systems to help your team succeed."
              hClassName="text-5xl font-semibold"
              pClassNameOne="max-w-lg pt-6"
            />

            {/* Contact small-cards */}
            <div className="space-y-4">
              {addressData.map((item, index) => (
                <ContactSmallCards item={item} key={index} index={index} />
              ))}
            </div>
          </div>

          {/* Right Side contact form */}
          <div className="w-full bg-white/2 p-10 md:w-1/2 lg:p-16">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
