import "../assets/styles/Contact.css";
import SectionTopHeader from "./SectionTopHeader";
import ContactSmallCards from "./ContactSmallCards";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  const addressData = [
    {
      icon: FaLocationDot,
      title: "Address",
      description: "New Mexico, 31134",
    },
    {
      icon: FaEnvelope,
      title: "My Email",
      description: "mymail@mail.com",
    },
    {
      icon: FaPhone,
      title: "Call Me Now",
      description: "00-123 00000",
    },
  ];

  return (
    <section id="contact" className="contact-grad scroll-mt-16 p-16">
      {/* Contact Section */}
      <div className="flex w-full flex-col rounded-md bg-white shadow-lg md:flex-row">
        {/* Left Side contact information */}
        <div className="w-full p-16 md:w-1/2">
          <SectionTopHeader
            sectionTopClassName="text-start pb-12"
            header="Let’s discuss your Project"
            paraOne="I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for."
            hClassName="text-5xl font-semibold"
            pClassNameOne="max-w-lg pt-6"
          />

          {/* Contact small-cards */}
          <div className="space-y-4">
            {addressData?.map((item, index) => (
              <ContactSmallCards item={item} key={index} />
            ))}
          </div>
        </div>

        {/* Right Side contact form */}
        <div className="w-full p-16 md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
