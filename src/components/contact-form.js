import React from "react"

const ContactForm = () => (
  <>
    <form className="sm:p-0 md:pb-0 md:p-4 w-full">
      <div className="mb-4 w-full">
        <input
          className="contact-input"
          id="name"
          type="text"
          placeholder="Name"
        ></input>
      </div>

      <div className="mb-4 w-full">
        <input
          className="contact-input"
          id="email"
          type="email"
          placeholder="Email Address"
        ></input>
      </div>

      <div className="mb-4 w-full">
        <textarea
          className="contact-input"
          id="message"
          type="textarea"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div className="flex">
        <button
          className="border-2 border-white border-solid py-2 px-5 bg-black hover:bg-black text-white font-bold   focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  </>
)

export default ContactForm
