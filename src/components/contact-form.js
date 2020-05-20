import React from "react"

const ContactForm = () => (
  <>
    <form
      className="sm:p-0 md:pb-0 md:p-4 w-full"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="mb-4 w-full">
        <input
          className="contact-input"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        ></input>
      </div>

      <div className="mb-4 w-full">
        <input
          className="contact-input"
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
        ></input>
      </div>

      <div className="mb-4 w-full">
        <textarea
          className="contact-input"
          id="message"
          name="message"
          type="textarea"
          placeholder="Your Message"
        ></textarea>
      </div>

      <div className="flex">
        <button
          className="border-2 border-white border-solid py-2 px-5 bg-black hover:bg-black text-white font-bold focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </>
)

export default ContactForm
