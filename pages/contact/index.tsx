import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <Link
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Ismael Miah
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Get in touch
            </h1>
            <h6>I&apos;m always looking to meet with prospective clients.</h6>
          </div>

          <div className="contact-info flex gap-12 items-center">
            <div className="say-hello w-1/2">
              <form className="max-w-lg mx-auto bg-teal-100 p-6 rounded-lg shadow-md" name="contact" method="POST" data-netlify="true">
                <input
                  type="email"
                  id="email_to"
                  name="email_to"
                  className="w-full px-4 py-2 mb-4 border border-black  text-slate-950 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="To: ismaelmiah.swe@gmail.com"
                  readOnly={true}
                  disabled={true}
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Subject of your message"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                  rows={4}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="my-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78795.01301538678!2d-0.5103364578064701!3d51.89118322277623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876360018f62c49%3A0x33fa5303edefd681!2sLuton!5e0!3m2!1sen!2suk!4v1729901073330!5m2!1sen!2suk"
                width="600"
                height="450"
                className="rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
