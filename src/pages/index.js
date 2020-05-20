import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import Philosophy from "../text/philosophy.mdx"
import Services from "../text/services.mdx"
import Contact from "../text/contact.mdx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      id="philosophy"
      className="mt-1 md:mt-10 p-4 md:p-0 max-w-screen-md p-16 lg:p-0"
    >
      <Philosophy />
    </div>
    <div
      id="services"
      className="mt-1 md:mt-10 p-4 md:p-0 max-w-screen-md p-16 lg:p-0"
    >
      <Services />
    </div>
    <div
      id="contact"
      className="mt-1 md:mt-10 flex p-4 md:p-0 flex-col md:flex-row"
    >
      <div className="max-w-md mr-0 md:mr-6 lg:mr-6">
        <Contact />
      </div>
      <div className="flex-1 max-w-screen-sm">
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default IndexPage
