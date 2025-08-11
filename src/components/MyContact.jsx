import { Fragment, useRef, useEffect } from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MyContact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    form.current.reset();
  };

  const contactInfo = [
    {
      icon: <MdLocationPin className="text-3xl text-[#38bdf8]" />,
      text: "Bahawalpur, Punjab, Pakistan",
      link: "#"
    },
    {
      icon: <MdOutlineAlternateEmail className="text-3xl text-[#38bdf8]" />,
      text: "fakharabbasbhatti333@gmail.com",
      link: "mailto:fakharabbasbhatti333@gmail.com"
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-[#38bdf8]" />,
      text: "+92 308-6046246",
      link: "tel:+923086046246"
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-[#38bdf8]" />,
      text: "+92 306-2158956",
      link: "tel:+923062158956"
    },
    {
      icon: <CgWebsite className="text-3xl text-[#38bdf8]" />,
      text: "https://fakharabbas.com",
      link: "https://fakharabbas.com"
    }
  ];

  return (
    <Fragment>
      <section id="contact" className="relative py-20 px-6 bg-gray-900 min-h-screen overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#38bdf8] opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#0ea5e9] opacity-10 rounded-full blur-3xl animate-float-delay"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group"
            >
              Get In <span className="text-[#38bdf8]">Touch</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#38bdf8] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss potential opportunities? Let's connect!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <div 
              data-aos="fade-right"
              className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">Send me a message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="from_phone"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-white"
                    placeholder="Hello Fakhar, I would like to discuss..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#38bdf8]/30"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div 
              data-aos="fade-left"
              className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 group"
                  >
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#38bdf8] transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Available for work</h3>
                <p className="text-gray-300">
                  I'm currently available for freelance projects and full-time positions. 
                  Feel free to reach out for collaborations or just to say hello!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </Fragment>
  );
};

export default MyContact;