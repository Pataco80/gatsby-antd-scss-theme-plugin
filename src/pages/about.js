import React from "react"
import { Link } from "gatsby"
import { Button } from 'antd';
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout page="about">
    <SEO title="Page two" />
    <h1>About</h1>
    <p>Welcome to About page</p>
    <Button type="primary">
      <Link to="/">Go back to the homepage</Link>
    </Button>

  </Layout>
)

export default AboutPage
