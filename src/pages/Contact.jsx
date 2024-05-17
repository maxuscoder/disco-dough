import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#221a11] p-4">
      <h1 className="text-4xl font-bold text-orange-400 mb-4">Contact Us</h1>
      <p className="text-lg text-orange-100 mb-8">
        We&apos;d love to hear from you! Please fill out the form below.
      </p>
      <form className="w-full max-w-lg bg-[#433322] p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <Link className="text-white text-md" to="/menu" type="primary">
            ⬅ Back to menu
          </Link>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
